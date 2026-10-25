import type { Metadata } from "next";
import { PageIntro, Section, SummaryCard } from "@/components/site/ui";
import { startJourneyHref } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Memberships & Plans | MetaboliQ OS",
  description: "Choose the support that fits your journey — for individuals, professionals and organisations.",
  path: "/plans",
});

/**
 * Prices, billing terms and inclusions are not approved for V1, so this page
 * shows the introduction and the three interest routes only — no purchase
 * cards or checkout (§8 build notes).
 */
export default function PlansPage() {
  return (
    <>
      <PageIntro eyebrow="Memberships & Plans" title="Choose the Support That Fits Your Journey.">
        <p>
          Compare what is included: platform access, REVA usage, reports, plan reviews and any scheduled human support.
          Choose based on the help you need and the services available to you.
        </p>
      </PageIntro>

      <Section>
        <div className="grid gap-4 md:grid-cols-3">
          <SummaryCard title="For you" action={{ label: "Start My Journey", href: startJourneyHref }}>
            <p>Start with your own health picture, then explore practical actions and track what changes.</p>
          </SummaryCard>
          <SummaryCard title="For professionals" action={{ label: "Join the Founders Waitlist", href: "/partners#interest" }}>
            <p>Clinics, coaches and consultants: MetaboliQ OS Pro is being prepared.</p>
          </SummaryCard>
          <SummaryCard title="For organisations" action={{ label: "Register Corporate Interest", href: "/corporate#interest" }}>
            <p>Corporate and insurance pathways are planned for a later stage.</p>
          </SummaryCard>
        </div>
      </Section>
    </>
  );
}
