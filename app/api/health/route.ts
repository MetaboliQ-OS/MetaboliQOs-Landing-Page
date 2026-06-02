import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isSmtpConfigured } from "@/lib/env";

export async function GET() {
  let database: "ok" | "error" = "ok";

  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch {
    database = "error";
  }

  const status = database === "ok" ? "ok" : "degraded";

  return NextResponse.json(
    {
      status,
      service: "metaboliq-os",
      database,
      smtp: isSmtpConfigured() ? "configured" : "pending",
      timestamp: new Date().toISOString(),
    },
    { status: status === "ok" ? 200 : 503 },
  );
}
