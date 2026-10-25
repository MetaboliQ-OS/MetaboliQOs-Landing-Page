import type { Metadata } from "next";
import { InterestForm } from "@/components/site/InterestForm";
import { BodyIcon, DnaIcon, LabIcon } from "@/components/site/icons";
import { PageIntro, Section } from "@/components/site/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "For Partners | MetaboliQ OS",
  description:
    "MetaboliQ OS Pro is being prepared for clinics, coaches and consultants. Join the Founders Waitlist to explore a co-branded pilot.",
  path: "/partners",
});

const pathways = [
  { title: "Genetic-test journeys", icon: <DnaIcon /> },
  { title: "Metabolic wellness journeys", icon: <BodyIcon /> },
  { title: "Health and clinical-record pathways", icon: <LabIcon /> },
];

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="For partners"
        title="Help Your Clients Turn Information Into Action."
        primary={{ label: "Join the Founders Waitlist", href: "#interest" }}
      >
        <p>
          We are preparing MetaboliQ OS Pro for clinics, coaches and consultants. Explore a co-branded pilot around
          your strengths: genetic-test journeys, metabolic wellness journeys or health and clinical-record pathways.
        </p>
      </PageIntro>

      <Section eyebrow="Partner pilots" title="Explore a Co-Branded Pilot">
        <ul className="grid gap-3 sm:grid-cols-3">
          {pathways.map((p) => (
            <li
              key={p.title}
              className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5"
            >
              <span className="text-[var(--gold-ink)]">{p.icon}</span>
              <span className="text-[1.1rem] font-semibold leading-snug text-text-primary">{p.title}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="interest"
        tone="alt"
        eyebrow="Founders Waitlist"
        title="Join the Founders Waitlist"
        intro={
          <p>
            Professional accounts are a planned stage. This form registers your interest only — it does not create an
            account, take payment or ask for patient records.
          </p>
        }
      >
        <div className="max-w-3xl">
          <InterestForm type="partner" />
        </div>
      </Section>
    </>
  );
}
