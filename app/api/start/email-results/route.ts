import { NextRequest } from "next/server";
import { z } from "zod";
import { apiError, apiSuccess } from "@/lib/api";
import { sendStartingFocusEmail } from "@/lib/email";
import { isEmailConfigured } from "@/lib/env";
import { sanitiseAnswers, startingResult } from "@/lib/start-journey";

/**
 * Emails a visitor their questionnaire result (Live V1 §11 "Save My Results by
 * Email"). Only option ids are accepted and the text is rebuilt server-side from
 * fixed phrases. Nothing is written to the database; email saving is separate
 * from marketing consent (§13).
 */
const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email."),
  consent: z.literal(true, { message: "Please confirm you want your results emailed." }),
  answers: z.unknown(),
  website: z.string().optional(), // honeypot — real visitors never fill it
});

// Best-effort limit per server instance: 5 emails per address / IP per hour.
const WINDOW_MS = 60 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();
function limited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > LIMIT;
}

export async function POST(request: NextRequest) {
  try {
    const parsed = bodySchema.safeParse(await request.json());
    if (!parsed.success) return apiError(parsed.error.issues[0]?.message ?? "Invalid request.", 422);
    const { email, answers, website } = parsed.data;
    if (website) return apiSuccess("Your results are on their way.");

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (limited(`ip:${ip}`) || limited(`email:${email}`)) {
      return apiError("Too many requests. Please try again later.", 429);
    }
    if (!isEmailConfigured()) {
      return apiError("We could not send your results right now. Please try again later.", 503);
    }

    await sendStartingFocusEmail(email, startingResult(sanitiseAnswers(answers)));
    return apiSuccess("Your results are on their way.");
  } catch (error) {
    console.error("start email-results error", error);
    return apiError("We could not send your results right now. Please try again later.", 500);
  }
}
