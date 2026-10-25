import type { Metadata } from "next";
import { CtaBand, PageIntro, Section, StepItem } from "@/components/site/ui";
import { startJourneyHref } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";
import { fiveSteps } from "@/lib/v1-content";

export const metadata: Metadata = createPageMetadata({
  title: "How It Works — 5 Steps | MetaboliQ OS",
  description:
    "Understand your starting point, receive a plan, record what changes, use REVA to make sense of it and keep adjusting towards your goals.",
  path: "/platform/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="How it works"
        title="Your Daily Precision Health Decision Starts Here."
        primary={{ label: "Start My Journey", href: startJourneyHref }}
      >
        <p>
          Understand your starting point. Receive a plan. Record what changes. Use REVA to make sense of it. Keep
          adjusting towards your goals.
        </p>
      </PageIntro>

      <Section id="steps" eyebrow="The 5 steps" title="Five steps, one continuous journey.">
        <ol className="max-w-4xl space-y-3">
          {fiveSteps.map((step, i) => (
            <StepItem key={step.title} n={i + 1} title={`Step ${i + 1} — ${step.title}`}>
              {step.body.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
              {"deliverables" in step ? (
                <div className="rounded-xl border border-[var(--line)] bg-[var(--gold-wash)] p-4">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--gold-ink)]">Deliverables</p>
                  <ul className="mt-2 space-y-1.5">
                    {step.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span aria-hidden className="text-[var(--gold-ink)]">
                          ✓
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </StepItem>
          ))}
        </ol>
      </Section>

      <CtaBand
        title="Start with the information you have."
        secondary={{ label: "Explore the 6 Phases", href: "/platform/phases" }}
      />
    </>
  );
}
