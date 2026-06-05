import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiError, apiSuccess } from "@/lib/api";
import { sendWelcomeEmail } from "@/lib/email";
import { isEmailConfigured } from "@/lib/env";
import { verifyOtpSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = verifyOtpSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(parsed.error.issues[0]?.message ?? "Invalid request.", 422);
    }

    const { email, otp } = parsed.data;

    const existing = await prisma.waitlistUser.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (existing) {
      return apiError("This email is already registered.", 409);
    }

    const pending = await prisma.pendingSignup.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!pending) {
      return apiError("No pending application found. Submit the form and request an OTP first.", 404);
    }
    if (pending.otp !== otp) return apiError("Incorrect OTP.", 401);
    if (pending.otpExpiry < new Date()) {
      return apiError("OTP expired. Request a new code.", 410);
    }

    let founderNumber: number | null = null;
    if (pending.isVip) {
      const vipCount = await prisma.waitlistUser.count({ where: { isVip: true } });
      founderNumber = vipCount + 1;
    }

    await prisma.$transaction(async (tx) => {
      await tx.waitlistUser.create({
        data: {
          email: pending.email,
          firstName: pending.firstName,
          lastName: pending.lastName,
          country: pending.country,
          primaryInterest: pending.primaryInterest,
          whatBringsYouHere: pending.whatBringsYouHere,
          isVip: pending.isVip,
          founderNumber,
          verified: true,
        },
      });

      await tx.pendingSignup.delete({ where: { email: pending.email } });
    });

    if (isEmailConfigured()) {
      try {
        await sendWelcomeEmail(email, pending.isVip);
        await prisma.waitlistUser.update({
          where: { email },
          data: { welcomeEmailSentAt: new Date() },
        });
      } catch (welcomeError) {
        console.error("welcome email failed for", email, welcomeError);
        return apiError(
          "You're registered, but we couldn't send your welcome email. Please contact support.",
          502,
        );
      }
    }

    return apiSuccess("Registration complete. Welcome to MetaboliQ OS.", 200, {
      verified: true,
      isVip: pending.isVip,
      founderNumber,
    });
  } catch (error) {
    console.error("verify-otp error", error);
    return apiError("Unable to verify OTP right now.", 500);
  }
}
