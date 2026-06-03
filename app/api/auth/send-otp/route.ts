import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiError, apiSuccess } from "@/lib/api";
import { emailSchema } from "@/lib/validations";
import {
  checkAndIncrementOtpRateLimit,
  generateOtp,
  getOtpExpiryDate,
} from "@/lib/otp";
import { sendOtpEmail } from "@/lib/email";
import { isSmtpConfigured } from "@/lib/env";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = emailSchema.safeParse(body);

    if (!parsed.success) {
      return apiError(parsed.error.issues[0]?.message ?? "Invalid email.", 422);
    }

    const { email } = parsed.data;

    if (!isSmtpConfigured()) {
      return apiError(
        "Email service is not configured yet. SMTP will be enabled on the next deploy.",
        503,
      );
    }

    const existing = await prisma.waitlistUser.findUnique({ where: { email } });

    if (existing?.verified) {
      return apiError("This email is already on the waitlist.", 409);
    }

    const rateLimit = await checkAndIncrementOtpRateLimit(email);
    if (!rateLimit.allowed) {
      return apiError("Too many OTP requests. Try again in an hour.", 429);
    }

    const otp = generateOtp();
    const otpExpiry = getOtpExpiryDate();
    const otpCreatedAt = new Date();

    await prisma.waitlistUser.upsert({
      where: { email },
      create: {
        email,
        otp,
        otpExpiry,
        otpCreatedAt,
        verified: false,
        otpSendCount: rateLimit.otpSendCount,
        otpWindowStart: rateLimit.otpWindowStart,
      },
      update: {
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
