import type { Metadata } from "next";
import { ActionLink, CtaBand, PageIntro, Section } from "@/components/site/ui";
import { ninePillars } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "The 9 Pillars | MetaboliQ OS",
  description:
    "Nine things that shape your metabolic health — the areas that support the MRRRU journey, from measurement and glucose to sleep, stress and long-term habits.",
  path: "/platform/pillars",
});

/** Existing nine-pillar explanation, migrated with its order and wording (Live V1 §4 build notes). */
export default function PillarsPage() {
  return (
    <>
      <PageIntro eyebrow="What matters" title="Nine Things That Shape Your Metabolic Health">
        <p>
          Most people focus on one thing — food, or exercise, or sleep. MetaboliQ OS tracks all nine because your body
          does not work in isolation.
        </p>
        <p className="text-base text-text-muted">
          The 9 pillars explain the areas that support the journey. They are not the same as the scoring domains used
          for the MQOS Score.
        </p>
      </PageIntro>

      <Section>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ninePillars.map((pillar, i) => (
            <li key={pillar.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5 sm:p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--gold-wash)] text-sm font-bold text-[var(--gold-ink)]">
                {i + 1}
              </span>
              <h2 className="mt-3 text-[1.3rem] font-semibold leading-snug text-text-primary">{pillar.title}</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-text-secondary">{pillar.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <ActionLink action={{ label: "Explore the 6 Phases", href: "/platform/phases" }} variant="text" />
          <ActionLink action={{ label: "See the 5 Steps", href: "/platform/how-it-works" }} variant="text" />
        </div>
      </Section>

      <CtaBand title="Discover your metabolism. Personalise your actions. Measure what changes." />
    </>
  );
}
