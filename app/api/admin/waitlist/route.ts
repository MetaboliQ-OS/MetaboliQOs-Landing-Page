import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { getEnv } from "@/lib/env";
import { apiError, apiSuccess } from "@/lib/api";

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-admin-secret");

  if (!secret || secret !== getEnv().ADMIN_SECRET) {
    return apiError("Unauthorized.", 401);
  }

  try {
    const users = await prisma.waitlistUser.findMany({
      where: { verified: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        country: true,
        primaryInterest: true,
        whatBringsYouHere: true,
        isVip: true,
        founderNumber: true,
        verified: true,
        createdAt: true,
      },
    });

    const vipMembers = users.filter((user) => user.isVip);
    const betaWaitlist = users.filter((user) => !user.isVip);

    return apiSuccess("Waitlist fetched.", 200, {
      total: users.length,
      vip: vipMembers.length,
      betaWaitlist: betaWaitlist.length,
      users,
    });
  } catch (error) {
    console.error("waitlist list error", error);
    return apiError("Unable to fetch waitlist.", 500);
  }
}
