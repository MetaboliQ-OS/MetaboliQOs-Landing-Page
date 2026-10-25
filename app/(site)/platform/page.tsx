import type { Metadata } from "next";
import { DeviceIcon, MoveIcon, SleepIcon, StressIcon } from "@/components/site/icons";
import { ActionLink, CtaBand, Disclosure, PageIntro, Section, SummaryCard } from "@/components/site/ui";
import { mrrruLetters } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/seo";
import { faqs } from "@/lib/v1-content";

export const metadata: Metadata = createPageMetadata({
  title: "Platform | MetaboliQ OS powered by MRRRU",
  description:
    "From fragmented health data to precision daily decisions: how MetaboliQ OS connects your signals, the MRRRU framework, the 6 phases and the 9 pillars.",
  path: "/platform",
});

const topics = [
  {
    title: "Sleep",
    href: "/platform/sleep",
    icon: <SleepIcon />,
    text: "Make sleep part of the plan, alongside your food, movement and recovery.",
  },
  {
    title: "Stress",
    href: "/platform/stress",
    icon: <StressIcon />,
    text: "Stress, cravings and disrupted routines belong in the picture.",
  },
  {
    title: "Movement & Fitness",
    href: "/platform/movement",
    icon: <MoveIcon />,
    text: "Build movement around your goals, current ability and recovery.",
  },
  {
    title: "Data & Devices",
    href: "/platform/data-devices",
    icon: <DeviceIcon />,
    text: "Start with the information you have. You do not need every device to begin.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageIntro
        eyebrow="Platform"
        title="From Fragmented Health Data to Precision Daily Decisions."
        primary={{ label: "See the 5 Steps", href: "/platform/how-it-works" }}
      >
        <p>
          Your metabolism does not operate in isolation. What you eat, when you eat, how you sleep, move and manage
          stress all influence what your body needs next. Health conditions, medication and genetic information can add
          further context. The useful question is: what should you do with that information today?
        </p>
        <p>
          MetaboliQ OS is designed to connect those signals, identify relevant patterns and turn complex information
          into a small number of practical actions. You record what happens. The system uses that history to support the
          next decision.
        </p>
      </PageIntro>

      <Section
        id="intelligence"
        tone="alt"
        eyebrow="The intelligence behind the decision"
        title="From Trillions of Metabolic Possibilities to One Precision Daily Decision."
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="space-y-4 leading-relaxed text-text-secondary">
            <p>
              Even a simplified model of 30 signals, each with three possible states, produces 205.9 trillion
              theoretical combinations. That is a way to illustrate complexity. It is not a count of tested
              recommendations or proven outcomes.
            </p>
            <p>
              The point is not to show you trillions of options. It is to filter the information, account for
              uncertainty and focus on a useful next action. Our architecture is designed to prioritise relevant
              information and learn from measured responses through Personal Metabolic Memory.
            </p>
          </div>
          <div className="space-y-4">
            {/* A simple funnel: many possibilities → a few relevant signals → one action. */}
            <ol aria-label="From possibilities to one decision" className="space-y-2">
              {[
                { w: "100%", label: "205.9 trillion theoretical contexts" },
                { w: "72%", label: "Your relevant signals and history" },
                { w: "44%", label: "A few prioritised options" },
                { w: "24%", label: "One next action" },
              ].map((row, i) => (
                <li key={row.label} className="flex justify-center">
                  <span
                    className="block rounded-xl border border-[var(--line-strong)] px-3 py-2.5 text-center text-xs font-semibold text-text-primary sm:text-sm"
                    style={{
                      width: row.w,
                      minWidth: "9.5rem",
                      background: `rgba(201,168,76,${0.05 + i * 0.07})`,
                    }}
                  >
                    {row.label}
                  </span>
                </li>
              ))}
            </ol>
            <Disclosure summary="Method note">
              <p>
                3<sup>30</sup> = 205,891,132,094,649 theoretical contexts. Actual signals, state boundaries and
                dependencies require defined specifications.
              </p>
            </Disclosure>
          </div>
        </div>
      </Section>

      <Section id="mrrru" eyebrow="The framework" title="Metabolic Repair, Reversal Recalibration Unlocked.">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-4 leading-relaxed text-text-secondary">
            <p>
              MRRRU is the framework behind MetaboliQ OS. It connects daily actions with a longer journey: understanding
              your starting point, building routines, observing your responses and adjusting over time.
            </p>
            <p>
              The 5 steps explain how you use the service. The 6 MRRRU phases describe the journey framework. The 9
              pillars explain the areas that support it. They serve different purposes.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
              <ActionLink action={{ label: "Explore the 6 Phases", href: "/platform/phases" }} variant="text" />
              <ActionLink action={{ label: "Explore the 9 Pillars", href: "/platform/pillars" }} variant="text" />
            </div>
          </div>
          <ul className="grid grid-cols-5 gap-2" aria-label="MRRRU">
            {mrrruLetters.map((item) => (
              <li
                key={item.letter + item.title}
                className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-1 py-3 text-center"
              >
                <span
                  className="text-[2rem] font-black leading-none sm:text-[2.4rem]"
                  style={{ fontFamily: "var(--font-head)", color: item.color }}
                  aria-hidden
                >
                  {item.letter}
                </span>
                <span className="mt-2 text-[0.58rem] font-bold uppercase leading-tight tracking-wide text-text-secondary sm:text-[0.66rem]">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section id="topics" tone="alt" eyebrow="Explore" title="Every part of your day, in one picture.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t) => (
            <SummaryCard key={t.href} title={t.title} icon={t.icon} action={{ label: "Learn more", href: t.href }}>
              <p>{t.text}</p>
            </SummaryCard>
          ))}
        </div>
      </Section>

      <Section id="faqs" eyebrow="FAQs" title="Questions, answered.">
        <div className="max-w-3xl space-y-3">
          {faqs.map((f) => (
            <Disclosure key={f.q} summary={f.q}>
              <p>{f.a}</p>
            </Disclosure>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Your Daily Precision Health Decision Starts Here."
        secondary={{ label: "See How It Works", href: "/platform/how-it-works" }}
      />
    </>
  );
}
