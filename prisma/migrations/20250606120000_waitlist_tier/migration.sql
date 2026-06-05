-- CreateEnum
CREATE TYPE "WaitlistTier" AS ENUM ('USER', 'FOUNDER');

-- AlterTable
ALTER TABLE "WaitlistUser" ADD COLUMN "tier" "WaitlistTier" NOT NULL DEFAULT 'USER';
ALTER TABLE "WaitlistUser" ADD COLUMN "founderNumber" INTEGER;

-- Existing signups came through the founding form
UPDATE "WaitlistUser" SET "tier" = 'FOUNDER' WHERE "verified" = true;
