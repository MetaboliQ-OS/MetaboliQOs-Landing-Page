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
  const pending = await prisma.pendingSignup.findUnique({ where: { email } });
  const now = new Date();

  if (!pending) {
    return { allowed: true, otpSendCount: 1, otpWindowStart: now };
  }

  const windowExpired =
    !pending.otpWindowStart ||
    now.getTime() - pending.otpWindowStart.getTime() >= ONE_HOUR_MS;

  if (windowExpired) {
    return { allowed: true, otpSendCount: 1, otpWindowStart: now };
  }

  if (pending.otpSendCount >= getEnv().OTP_MAX_REQUESTS_PER_HOUR) {
    return {
      allowed: false,
      otpSendCount: pending.otpSendCount,
      otpWindowStart: pending.otpWindowStart,
    };
  }

  return {
    allowed: true,
    otpSendCount: pending.otpSendCount + 1,
    otpWindowStart: pending.otpWindowStart,
  };
}
