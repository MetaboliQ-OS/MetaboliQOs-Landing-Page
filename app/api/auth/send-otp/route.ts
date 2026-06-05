import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiError, apiSuccess } from "@/lib/api";
import { betaApplicationSchema, normalizeApplicationData } from "@/lib/validations";
import {
  checkAndIncrementOtpRateLimit,
  generateOtp,
  getOtpExpiryDate,
} from "@/lib/otp";
import { sendOtpEmail } from "@/lib/email";
import { isEmailConfigured } from "@/lib/env";

async function nextFounderNumber() {
  const vipCount = await prisma.waitlistUser.count({
    where: { isVip: true },
  });
  return vipCount + 1;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = betaApplicationSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(parsed.error.issues[0]?.message ?? "Invalid application.", 422);
    }

    const application = normalizeApplicationData(parsed.data);
    const { email, isVip: wantsVip, ...profile } = application;

    if (!isEmailConfigured()) {
      return apiError(
        "Email service is not configured. Add RESEND_API_KEY and RESEND_FROM to your .env file.",
        503,
      );
    }

    const registered = await prisma.waitlistUser.findUnique({ where: { email } });

    if (registered) {
      if (wantsVip) {
        if (registered.isVip) {
          return apiError("This email is already registered as a VIP founding member.", 409);
        }

        const founderNumber = await nextFounderNumber();
        await prisma.waitlistUser.update({
          where: { email },
          data: { isVip: true, founderNumber, ...profile },
        });

        return apiSuccess(
          `You're already registered — upgraded to VIP founding member #${founderNumber}.`,
          200,
          { upgraded: true, isVip: true, founderNumber },
        );
      }

      if (registered.isVip) {
        return apiError("This email is already registered as a VIP founding member.", 409);
      }

      return apiError("This email is already registered on the beta waitlist.", 409);
    }

    const rateLimit = await checkAndIncrementOtpRateLimit(email);
    if (!rateLimit.allowed) {
      return apiError("Too many OTP requests. Try again in an hour.", 429);
    }

    const otp = generateOtp();
    const otpExpiry = getOtpExpiryDate();
    const otpCreatedAt = new Date();

    await prisma.pendingSignup.upsert({
      where: { email },
      create: {
        email,
        ...profile,
        isVip: wantsVip,
        otp,
        otpExpiry,
        otpCreatedAt,
        otpSendCount: rateLimit.otpSendCount,
        otpWindowStart: rateLimit.otpWindowStart,
      },
      update: {
        ...profile,
        isVip: wantsVip,
        otp,
        otpExpiry,
        otpCreatedAt,
        otpSendCount: rateLimit.otpSendCount,
        otpWindowStart: rateLimit.otpWindowStart,
      },
    });

    await sendOtpEmail(email, otp);

    return apiSuccess("A 6-digit verification code was sent to your email.");
  } catch (error) {
    console.error("send-otp error", error);
    return apiError(
      "We couldn't send your code right now. Please try again in a moment.",
      500,
    );
  }
}
