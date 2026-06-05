-- AlterTable: everyone is a user; founders get a VIP tag
ALTER TABLE "WaitlistUser" ADD COLUMN "isVip" BOOLEAN NOT NULL DEFAULT false;

UPDATE "WaitlistUser" SET "isVip" = true WHERE "tier" = 'FOUNDER';

ALTER TABLE "WaitlistUser" DROP COLUMN "tier";

DROP TYPE "WaitlistTier";
