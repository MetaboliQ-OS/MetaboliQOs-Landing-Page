import type { ReactNode } from "react";
import { DeviceIcon, MoveIcon, SleepIcon, StressIcon } from "@/components/site/icons";
import { PageIntro, Section } from "@/components/site/ui";
import Link from "next/link";
import { startJourneyHref } from "@/lib/nav";

const ALL_TOPICS = [
  { key: "sleep", title: "Sleep", href: "/platform/sleep", icon: <SleepIcon /> },
  { key: "stress", title: "Stress", href: "/platform/stress", icon: <StressIcon /> },
  { key: "movement", title: "Movement & Fitness", href: "/platform/movement", icon: <MoveIcon /> },
  { key: "data-devices", title: "Data & Devices", href: "/platform/data-devices", icon: <DeviceIcon /> },
] as const;

export type TopicKey = (typeof ALL_TOPICS)[number]["key"];

/**
 * Platform topic pages (Sleep, Stress, Movement, Data & Devices). The copy is
 * short by design (§7), so each page is the summary, its two actions and a way
 * on to the other topics — no padding with invented content.
 */
export function TopicPage({
  topic,
  eyebrow,
  title,
  children,
  learn,
}: {
  topic: TopicKey;
  eyebrow: string;
  title: string;
  children: ReactNode;
  learn?: { label: string; href: string };
}) {
  const others = ALL_TOPICS.filter((t) => t.key !== topic);
  return (
    <>
      <PageIntro
        eyebrow={eyebrow}
        title={title}
        primary={{ label: "Start My Journey", href: startJourneyHref }}
        secondary={learn}
      >
        {children}
      </PageIntro>
      <Section tone="alt" eyebrow="Platform" title="More of the picture">
        <ul className="grid gap-3 sm:grid-cols-3">
          {others.map((t) => (
            <li key={t.key}>
              <Link
                href={t.href}
                className="card-hover flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-4 py-4 font-semibold text-text-primary"
              >
                <span className="text-[var(--gold-ink)]">{t.icon}</span>
                {t.title}
                <span aria-hidden className="ml-auto text-[var(--gold-ink)]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-text-muted">
          <Link href="/platform" className="font-semibold text-[var(--gold-ink)] underline-offset-4 hover:underline">
            Back to the Platform overview
          </Link>
        </p>
      </Section>
    </>
  );
}
