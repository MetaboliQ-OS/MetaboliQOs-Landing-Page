import type { Metadata } from "next";
import { WaitlistForm } from "@/components/WaitlistForm";
import { PageIntro, Section } from "@/components/site/ui";
import { startJourneyHref } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "For You | MetaboliQ OS",
  description:
    "Start with your own health picture: bring your goals, daily routine and available information together, then track what changes.",
  path: "/for-you",
});

export default function ForYouPage() {
  return (
    <>
      <PageIntro
        eyebrow="For you"
        title="Start With Your Own Health Picture."
        primary={{ label: "Start My Journey", href: startJourneyHref }}
        secondary={{ label: "See How It Works", href: "/platform/how-it-works" }}
      >
        <p>
          Bring your goals, daily routine and available information together. Explore practical actions through Food
          OS, REVA and the MRRRU framework, then track what changes.
        </p>
      </PageIntro>

      {/* The existing private-beta sign-up, kept while the service remains in beta (§14). */}
      <Section id="beta" tone="alt">
        <div className="mx-auto max-w-2xl">
          <span id="founding" className="block scroll-mt-28" aria-hidden />
          <WaitlistForm />
        </div>
      </Section>
    </>
  );
}
