-- CreateTable
CREATE TABLE "WaitlistUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "otp" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "otpExpiry" TIMESTAMP(3),
    "otpCreatedAt" TIMESTAMP(3),
    "otpSendCount" INTEGER NOT NULL DEFAULT 0,
    "otpWindowStart" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WaitlistUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WaitlistUser_email_key" ON "WaitlistUser"("email");
