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
    const user = await prisma.waitlistUser.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) return apiError("Email not found. Request OTP first.", 404);
    if (user.verified) return apiError("Email already verified.", 409);
    if (!user.otp || user.otp !== otp) return apiError("Incorrect OTP.", 401);
    if (!user.otpExpiry || user.otpExpiry < new Date()) {
      return apiError("OTP expired. Request a new code.", 410);
    }

    await prisma.waitlistUser.update({
      where: { email },
      data: { verified: true, otp: null, otpExpiry: null },
    });

    if (isEmailConfigured()) {
      try {
        await sendWelcomeEmail(email);
        await prisma.waitlistUser.update({
          where: { email },
          data: { welcomeEmailSentAt: new Date() },
        });
      } catch (welcomeError) {
        console.error("welcome email failed for", email, welcomeError);
        return apiError(
          "You're verified, but we couldn't send your welcome email. Please contact support or try again later.",
          502,
        );
      }
    }

    return apiSuccess("Email verified successfully.", 200, { verified: true });
  } catch (error) {
    console.error("verify-otp error", error);
    return apiError("Unable to verify OTP right now.", 500);
  }
}
