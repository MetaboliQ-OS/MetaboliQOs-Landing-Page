import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { BodyIcon, FoodIcon, LabIcon, MemoryIcon, MoveIcon, SleepIcon, StressIcon } from "@/components/site/icons";
import { CtaBand, ExampleTag, PageIntro, Section } from "@/components/site/ui";
import { revaPageJsonLd } from "@/lib/json-ld";
import { decisionCockpitDemo } from "@/lib/marketing-content";
import { startJourneyHref } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Meet REVA — Your Personal AI Coach | MetaboliQ OS",
  description:
    "REVA connects your available records, goals and daily context, explains relevant patterns and suggests practical next steps — with Personal Metabolic Memory.",
  path: "/reva",
  keywords: ["REVA", "personal AI coach", "Personal Metabolic Memory", "MetaboliQ OS"],
  ogImageAlt: "Meet REVA — your personal AI coach on MetaboliQ OS",
});

const answerParts = [
  { title: "The next action", desc: "One practical step." },
  { title: "Why it matters", desc: "The reason behind it." },
  { title: "What to watch", desc: "The risk to keep an eye on." },
  { title: "What to track", desc: "The metric to record next." },
];

const signals = [
  { label: "Food", icon: <FoodIcon /> },
  { label: "Sleep", icon: <SleepIcon /> },
  { label: "Movement", icon: <MoveIcon /> },
  { label: "Stress", icon: <StressIcon /> },
  { label: "Body composition", icon: <BodyIcon /> },
  { label: "Health records", icon: <LabIcon /> },
];

/** The one labelled public demonstration (§7 build notes). Taken from the site's existing example. */
const exampleQuestion = "I slept badly and I’m having biryani for lunch. What should I do?";

export default function RevaPage() {
  return (
    <>
      <JsonLd data={revaPageJsonLd()} />

      <div id="meet" className="scroll-mt-24">
        <PageIntro
          eyebrow="REVA"
          title="Meet REVA. Your Personal AI Coach."
          primary={{ label: "Start My Journey", href: startJourneyHref }}
          secondary={{ label: "See How It Works", href: "/platform/how-it-works" }}
        >
          <p>
            Your health information should help you decide what to do next. REVA is designed to connect your available
            records, goals and daily context, explain relevant patterns and suggest practical next steps.
          </p>
          <p className="text-base text-text-muted">Available within your plan’s access and usage limits.</p>
        </PageIntro>
      </div>

      <Section id="how-to-use" tone="alt" eyebrow="How to use REVA" title="How to Use REVA">
        <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
          <p>
            Ask about food, sleep, movement, stress or recovery. Where information is missing, REVA should make that
            clear. Where professional input is needed, it should help you prepare the right questions.
          </p>
          <p>
            A useful answer explains the next action, why it matters, what to watch and what to track. Your history gives
            that answer context.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {answerParts.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-4">
              <span className="text-xs font-bold text-[var(--gold-ink)]">0{i + 1}</span>
              <p className="mt-1 font-semibold text-text-primary">{p.title}</p>
              <p className="mt-0.5 text-sm text-text-muted">{p.desc}</p>
            </li>
          ))}
        </ul>

        {/* One labelled demonstration — no public chat, no personal data collected. */}
        <figure className="mt-8 max-w-3xl rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <ExampleTag />
            <span className="text-xs text-text-muted">A sample answer, not personal advice</span>
          </div>
          <p className="mt-4 ml-auto w-fit max-w-[92%] rounded-2xl rounded-br-md bg-[var(--gold-wash)] px-4 py-3 text-[0.95rem] text-text-primary">
            {exampleQuestion}
          </p>
          <ul className="mt-4 space-y-2">
            {decisionCockpitDemo.revaStandard.map((line) => {
              const [label, ...rest] = line.split(":");
              return (
                <li key={line} className="rounded-xl border border-[var(--line)] px-4 py-3 text-[0.93rem] leading-relaxed text-text-secondary">
                  <span className="font-semibold text-text-primary">{label}:</span>
                  {rest.join(":")}
                </li>
              );
            })}
          </ul>
        </figure>
      </Section>

      <Section id="signals" eyebrow="Signals & patterns" title="Understand your signals. Decide what to do next.">
        <div className="max-w-3xl leading-relaxed text-text-secondary">
          <p>
            REVA is designed to connect your available records, goals and daily context, explain relevant patterns and
            suggest practical next steps. Where information is missing, REVA should make that clear.
          </p>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {signals.map((s) => (
            <li
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-3 py-4 text-center"
            >
              <span className="text-[var(--gold-ink)]">{s.icon}</span>
              <span className="text-sm font-semibold text-text-primary">{s.label}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="memory" tone="alt" eyebrow="Personal Metabolic Memory" title="Your Experience Becomes Part of the Next Decision.">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-center">
          <p className="max-w-3xl leading-relaxed text-text-secondary">
            A meal, a poor night’s sleep or a change in routine can mean more when viewed alongside your earlier records.
            Personal Metabolic Memory is designed to connect those observations over time, so guidance can account for
            your own patterns. A pattern is a clue to investigate, not automatic proof of cause.
          </p>
          <div className="flex items-center gap-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-5">
            <span className="text-[var(--gold-ink)]">
              <MemoryIcon />
            </span>
            <p className="text-sm leading-relaxed text-text-secondary">
              Observation → pattern → a better-informed next decision.
            </p>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Your health information should help you decide what to do next."
        secondary={{ label: "See How It Works", href: "/platform/how-it-works" }}
      />
    </>
  );
}
