import type { Metadata } from "next";
import { ActionLink, CtaBand, PageIntro, Section } from "@/components/site/ui";
import { phases } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "The 6 MRRRU Phases | MetaboliQ OS",
  description:
    "The six MRRRU phases describe the journey framework — from knowing your starting point to long-term metabolic freedom.",
  path: "/platform/phases",
});

/** Existing six-phase explanation, migrated with its order and wording (Live V1 §4 build notes). */
export default function PhasesPage() {
  return (
    <>
      <PageIntro eyebrow="Your journey" title="Six Phases To Rebuild Your Metabolic Health">
        <p>
          Not a diet plan. A step-by-step path from where you are today to better daily decisions. Each phase builds on
          the last — food, glucose, sleep, stress, blood markers and movement — tested on me first, built for you.
        </p>
        <p className="text-base text-text-muted">
          The 6 MRRRU phases describe the journey framework. The 5 steps explain how you use the service; the 9 pillars
          explain the areas that support it.
        </p>
      </PageIntro>

      <Section>
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {phases.map((phase) => (
            <li
              key={phase.id}
              className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5 sm:p-6"
            >
              <span aria-hidden className="absolute inset-y-0 left-0 w-1" style={{ background: phase.accent }} />
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--gold-ink)]">
                Phase {phase.id}
              </p>
              <h2 className="mt-1.5 text-[1.45rem] font-semibold leading-snug text-text-primary">{phase.title}</h2>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-text-secondary">{phase.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {phase.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-[var(--line)] bg-[var(--gold-wash)] px-2.5 py-1 text-xs text-text-secondary"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <ActionLink action={{ label: "Explore the 9 Pillars", href: "/platform/pillars" }} variant="text" />
          <ActionLink action={{ label: "See the 5 Steps", href: "/platform/how-it-works" }} variant="text" />
        </div>
      </Section>

      <CtaBand title="Understand your starting point." />
    </>
  );
}
