import { NextRequest } from "next/server";
import { apiError, apiSuccess } from "@/lib/api";
import { getEnv } from "@/lib/env";
import { prisma } from "@/lib/prisma";

/** Partner / corporate enquiries for the admin page (same secret as the waitlist). */
export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-admin-secret");
  if (!secret || secret !== getEnv().ADMIN_SECRET) return apiError("Unauthorized.", 401);

  try {
    const enquiries = await prisma.interestEnquiry.findMany({ orderBy: { createdAt: "desc" }, take: 500 });
    return apiSuccess("Enquiries fetched.", 200, {
      total: enquiries.length,
      partner: enquiries.filter((e) => e.type === "partner").length,
      corporate: enquiries.filter((e) => e.type === "corporate").length,
      enquiries,
    });
  } catch (error) {
    console.error("enquiries list error", error);
    return apiError("Unable to fetch enquiries.", 500);
  }
}
