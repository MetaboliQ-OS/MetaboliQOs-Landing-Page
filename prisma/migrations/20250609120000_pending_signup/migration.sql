-- CreateTable
CREATE TABLE "PendingSignup" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "country" TEXT,
    "primaryInterest" TEXT,
    "whatBringsYouHere" TEXT,
    "isVip" BOOLEAN NOT NULL DEFAULT false,
    "otp" TEXT NOT NULL,
    "otpExpiry" TIMESTAMP(3) NOT NULL,
    "otpCreatedAt" TIMESTAMP(3) NOT NULL,
    "otpSendCount" INTEGER NOT NULL DEFAULT 0,
    "otpWindowStart" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PendingSignup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PendingSignup_email_key" ON "PendingSignup"("email");

-- Remove unverified placeholder rows from the old flow
DELETE FROM "WaitlistUser" WHERE "verified" = false;

-- Drop OTP columns from registered users (only verified rows remain)
ALTER TABLE "WaitlistUser" DROP COLUMN IF EXISTS "otp";
ALTER TABLE "WaitlistUser" DROP COLUMN IF EXISTS "otpExpiry";
ALTER TABLE "WaitlistUser" DROP COLUMN IF EXISTS "otpCreatedAt";
ALTER TABLE "WaitlistUser" DROP COLUMN IF EXISTS "otpSendCount";
ALTER TABLE "WaitlistUser" DROP COLUMN IF EXISTS "otpWindowStart";

-- Registered users are always verified going forward
ALTER TABLE "WaitlistUser" ALTER COLUMN "verified" SET DEFAULT true;
