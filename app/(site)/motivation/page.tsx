import type { Metadata } from "next";
import { CtaBand, PageIntro, Section } from "@/components/site/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Motivation — Score, Progress, Confidence, Consistency, Credits | MetaboliQ OS",
  description:
    "A useful score needs context. MetaboliQ OS keeps health indicators, progress, information quality and daily actions separate.",
  path: "/motivation",
});

/** Five separate measures — kept apart so activity is never mistaken for health (§8). */
const measures = [
  { id: "score", name: "MQOS Score", what: "Eligible health information" },
  { id: "progress", name: "Progress", what: "Change against your own baseline" },
  { id: "confidence", name: "Confidence", what: "How complete, recent and reliable" },
  { id: "consistency", name: "Consistency", what: "Follow-through on agreed actions" },
  { id: "credits", name: "MQOS Credits", what: "Rewards for participation and learning" },
];

export default function MotivationPage() {
  return (
    <>
      <PageIntro eyebrow="Motivation" title="Know Where You Stand. See What Changes.">
        <p>
          A useful score needs context. Your health indicators, progress, quality of information and daily actions tell
          different parts of the story. MetaboliQ OS keeps them separate, so more activity in the app is not mistaken
          for better health.
        </p>
      </PageIntro>

      <Section tone="alt">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5" aria-label="Five separate measures">
          {measures.map((m) => (
            <li key={m.id}>
              <a
                href={`#${m.id}`}
                className="card-hover flex h-full flex-col rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-4"
              >
                <span className="font-semibold text-text-primary">{m.name}</span>
                <span className="mt-1 text-sm leading-snug text-text-muted">{m.what}</span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="score" eyebrow="MQOS Score" title="MQOS Score">
        {/* Score methodology and availability are not confirmed for V1 — the
            document's fallback wording is used instead of the score panel (§8). */}
        <p className="max-w-3xl rounded-2xl border border-[var(--line-strong)] bg-[var(--gold-wash)] p-5 leading-relaxed text-text-secondary">
          MQOS Score is in development. We will explain the methodology and availability before launch.
        </p>
      </Section>

      <Section id="progress" tone="alt" eyebrow="Progress and Confidence" title="Progress and Confidence">
        <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
          <p>
            Progress shows what has changed against your own baseline. Confidence explains how complete, recent and
            reliable the information is. Adding a report may improve the information available without improving your
            health indicators.
          </p>
        </div>
        <span id="confidence" className="block scroll-mt-28" aria-hidden />
      </Section>

      <Section id="consistency" eyebrow="Consistency and Credits" title="Consistency and Credits">
        <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
          <p>
            Consistency reflects follow-through on agreed actions. MQOS Credits are a separate reward system for eligible
            participation and learning. Credits do not improve your health score.
          </p>
          <p id="credits" className="scroll-mt-28 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5">
            We encourage useful habits and learning. We do not reward extreme fasting, rapid weight loss, low glucose
            readings or medication reduction.
          </p>
        </div>
      </Section>

      <CtaBand title="Know where you stand. See what changes." />
    </>
  );
}
