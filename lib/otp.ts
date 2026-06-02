import { prisma } from "@/lib/prisma";
import { getEnv } from "@/lib/env";

export function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOtpExpiryDate() {
  return new Date(Date.now() + getEnv().OTP_TTL_MINUTES * 60 * 1000);
}

const ONE_HOUR_MS = 60 * 60 * 1000;

export async function checkAndIncrementOtpRateLimit(email: string) {
  const user = await prisma.waitlistUser.findUnique({ where: { email } });
  const now = new Date();

  if (!user) {
    return { allowed: true, otpSendCount: 1, otpWindowStart: now };
  }

  const windowExpired =
    !user.otpWindowStart ||
    now.getTime() - user.otpWindowStart.getTime() >= ONE_HOUR_MS;

  if (windowExpired) {
    return { allowed: true, otpSendCount: 1, otpWindowStart: now };
  }

  if (user.otpSendCount >= getEnv().OTP_MAX_REQUESTS_PER_HOUR) {
    return { allowed: false, otpSendCount: user.otpSendCount, otpWindowStart: user.otpWindowStart };
  }

  return {
    allowed: true,
    otpSendCount: user.otpSendCount + 1,
    otpWindowStart: user.otpWindowStart,
  };
}
