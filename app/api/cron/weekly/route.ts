import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { apiError, apiSuccess } from "@/lib/api";
import { getEnv, isSmtpConfigured } from "@/lib/env";
import { sendWeeklyUpdateEmail } from "@/lib/email";

export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest, secret: string): boolean {
  const auth = request.headers.get("authorization");
  const bearer = auth?.startsWith("Bearer ") ? auth.slice(7) : undefined;
  const header = request.headers.get("x-cron-secret") ?? undefined;
  return bearer === secret || header === secret;
}

async function runWeeklyJob(request: NextRequest) {
  const { CRON_SECRET } = getEnv();

  if (!CRON_SECRET) {
    return apiError("Cron is not configured.", 503);
  }
  if (!isAuthorized(request, CRON_SECRET)) {
    return apiError("Unauthorized.", 401);
  }
  if (!isSmtpConfigured()) {
    return apiError("Email service is not configured.", 503);
  }

  const users = await prisma.waitlistUser.findMany({
    where: { verified: true },
    select: { email: true },
  });

  let sent = 0;
  const failed: string[] = [];

  // Sequential send keeps us well under provider rate limits for an alpha list.
  for (const user of users) {
    try {
      await sendWeeklyUpdateEmail(user.email);
      sent += 1;
    } catch (error) {
      console.error("weekly email failed for", user.email, error);
      failed.push(user.email);
    }
  }

  return apiSuccess("Weekly update dispatched.", 200, {
    recipients: users.length,
    sent,
    failed: failed.length,
  });
}

export async function POST(request: NextRequest) {
  try {
    return await runWeeklyJob(request);
  } catch (error) {
    console.error("weekly cron error", error);
    return apiError("Weekly job failed.", 500);
  }
}
