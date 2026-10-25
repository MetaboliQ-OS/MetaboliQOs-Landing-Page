import type { Metadata } from "next";
import { InterestForm } from "@/components/site/InterestForm";
import { PageIntro, Section } from "@/components/site/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "For Corporates and Insurers | MetaboliQ OS",
  description:
    "Corporate and insurance pathways are planned for a later stage. Register your interest to discuss your population, problem and outcomes.",
  path: "/corporate",
});

export default function CorporatePage() {
  return (
    <>
      <PageIntro
        eyebrow="For corporates and insurers"
        title="Explore Personalised Wellness at Organisational Scale."
        primary={{ label: "Register Corporate Interest", href: "#interest" }}
      >
        <p>
          Corporate and insurance pathways are planned for a later stage. Register your interest to discuss the
          population you serve, the problem you want to address and the outcomes you need to measure.
        </p>
      </PageIntro>

      <Section
        id="interest"
        tone="alt"
        eyebrow="Corporate interest"
        title="Register Corporate Interest"
        intro={
          <p>
            This form registers your interest only — it does not create an account, take payment or give dashboard
            access.
          </p>
        }
      >
        <div className="max-w-3xl">
          <InterestForm type="corporate" />
        </div>
      </Section>
    </>
  );
}
