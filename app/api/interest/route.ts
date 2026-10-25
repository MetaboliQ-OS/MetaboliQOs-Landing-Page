import { NextRequest } from "next/server";
import { apiError, apiSuccess } from "@/lib/api";
import { interestSchema } from "@/lib/interest";
import { prisma } from "@/lib/prisma";

/**
 * Partner / corporate interest (Live V1 §11–12). Collects interest only — no
 * payment and no dashboard access. Stored in InterestEnquiry; existing waitlist
 * tables are untouched.
 */
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
    const parsed = interestSchema.safeParse(await request.json());
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      // A wrong/missing `type` is not something a person filled in, so keep that message plain.
      const message = issue && issue.code !== "invalid_union" ? issue.message : "Please check the form.";
      return apiError(message, 422);
    }
    const { website, ...data } = parsed.data;
    if (website) return apiSuccess("Thank you. We have received your interest and will contact you using the details provided.");

    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (limited(`ip:${ip}`) || limited(`email:${data.workEmail}`)) {
      return apiError("Too many submissions. Please try again later.", 429);
    }

    await prisma.interestEnquiry.create({
      data: {
        type: data.type,
        name: data.name,
        workEmail: data.workEmail,
        organisation: data.organisation,
        role: data.type === "partner" ? data.role : null,
        country: data.country,
        interest: data.interest,
        population: data.type === "corporate" ? data.population : null,
        message: data.message,
        contactConsent: data.contactConsent,
        marketingOptIn: data.marketingOptIn,
      },
    });

    return apiSuccess("Thank you. We have received your interest and will contact you using the details provided.");
  } catch (error) {
    console.error("interest enquiry error", error);
    return apiError("We could not submit your details. Please try again.", 500);
  }
}
