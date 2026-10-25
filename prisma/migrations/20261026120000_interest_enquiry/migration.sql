-- CreateTable
CREATE TABLE "InterestEnquiry" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "workEmail" TEXT NOT NULL,
    "organisation" TEXT NOT NULL,
    "role" TEXT,
    "country" TEXT NOT NULL,
    "interest" TEXT NOT NULL,
    "population" TEXT,
    "message" TEXT,
    "contactConsent" BOOLEAN NOT NULL,
    "marketingOptIn" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InterestEnquiry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "InterestEnquiry_type_createdAt_idx" ON "InterestEnquiry"("type", "createdAt");
