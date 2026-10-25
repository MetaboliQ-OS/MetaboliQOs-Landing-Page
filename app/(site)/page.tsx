import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { LegacyHashRedirect } from "@/components/site/LegacyHashRedirect";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import {
  BodyIcon,
  ChatIcon,
  FoodIcon,
  LabIcon,
  MoveIcon,
  PillIcon,
  RecoveryIcon,
  SleepIcon,
  StressIcon,
} from "@/components/site/icons";
import { ActionLink, CtaBand, Eyebrow, Section, SummaryCard } from "@/components/site/ui";
import { homePageJsonLd } from "@/lib/json-ld";
import { startJourneyHref } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { fiveSteps, foodOsCounts, founderVideos, inventory, inventoryNote } from "@/lib/v1-content";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
});

const signals = [
  { label: "Lab results", icon: <LabIcon /> },
  { label: "Body composition", icon: <BodyIcon /> },
  { label: "Food and nutrition", icon: <FoodIcon /> },
  { label: "Sleep", icon: <SleepIcon /> },
  { label: "Stress", icon: <StressIcon /> },
  { label: "Movement", icon: <MoveIcon /> },
  { label: "Recovery", icon: <RecoveryIcon /> },
  { label: "Medication and supplement context", icon: <PillIcon /> },
];

export default function HomePage() {
  const video = founderVideos[0];

  return (
    <>
      <JsonLd data={homePageJsonLd()} />
      <LegacyHashRedirect />

      {/* Hero — one primary action (§3; acceptance: "one primary CTA"). */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.08) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-main relative grid gap-10 py-12 md:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
          <div>
            <Eyebrow>MetaboliQ OS powered by MRRRU</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.3rem,6.4vw,4.4rem)] font-semibold leading-[1.04] text-text-primary">
              Your Body Is Unique. <span className="gold-text italic">Your Health Decisions Should Be Too.</span>
            </h1>
            <p className="mt-5 text-lg font-semibold text-text-primary md:text-xl">Your Personal Longevity Decision OS™</p>
            <div className="gold-line" />
            <p className="max-w-xl text-[1.02rem] leading-relaxed text-text-secondary md:text-lg">
              Your blood markers, body composition, food, sleep, movement and stress all tell part of the story.
              MetaboliQ OS brings your available signals together to help you understand what matters and choose your
              next action. Genetic information can add context where available and supported.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <ActionLink action={{ label: "Start My Journey", href: startJourneyHref }} variant="gold" />
              <ActionLink action={{ label: "See How It Works", href: "/platform/how-it-works" }} variant="ghost" />
            </div>
          </div>
          <VideoEmbed id={video.id} title={video.title} caption="Mru Patel, Founder & CEO" />
        </div>
      </section>

      {/* Problem */}
      <Section tone="alt" eyebrow="The problem" title="There is no shortage of data, opinions and advice.">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <p className="max-w-2xl text-[1.02rem] leading-relaxed text-text-secondary">
            There have never been more ways to spend on your health: supplements, tests, wearables and treatments. But
            too often, the decisions are made from fragments. One report here. Another opinion there. What worked for
            someone else may not work the same way for you.
          </p>
          <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--gold-wash)] p-5">
            <p className="text-xl font-semibold leading-snug text-text-primary" style={{ fontFamily: "var(--font-head)" }}>
              Your body changes. Your daily decisions should take those changes into account.
            </p>
            <div className="mt-4">
              <ActionLink action={{ label: "Understand the Platform", href: "/platform" }} variant="text" />
            </div>
          </div>
        </div>
      </Section>

      {/* Platform preview */}
      <Section
        eyebrow="The platform"
        title="Bring the Whole Picture Together."
        intro={
          <p>
            Lab results. Body composition. Food and nutrition. Sleep. Stress. Movement. Recovery. Medication and
            supplement context. MetaboliQ OS connects the information you provide with your goals, so you can focus on
            what to do next.
          </p>
        }
      >
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {signals.map((s) => (
            <li
              key={s.label}
              className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-4 py-3.5"
            >
              <span className="shrink-0 text-[var(--gold-ink)]">{s.icon}</span>
              <span className="text-sm font-semibold leading-snug text-text-primary">{s.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          <ActionLink action={{ label: "Explore Food OS", href: "/food-os" }} variant="text" />
          <ActionLink action={{ label: "Meet REVA", href: "/reva" }} variant="text" />
        </div>
      </Section>

      {/* Five-step preview (§3 build notes: after the platform block). */}
      <Section tone="alt" eyebrow="How it works" title="Your Daily Precision Health Decision Starts Here.">
        <ol className="grid gap-3 md:grid-cols-5">
          {fiveSteps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--gold-wash)] text-sm font-bold text-[var(--gold-ink)]">
                {i + 1}
              </span>
              <h3 className="mt-3 text-[1.15rem] font-semibold leading-snug text-text-primary">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">{step.short}</p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <ActionLink action={{ label: "See the 5 Steps", href: "/platform/how-it-works" }} variant="text" />
        </div>
      </Section>

      {/* Food OS and REVA previews, before the founder / evidence section. */}
      <Section eyebrow="Inside MetaboliQ OS" title="Food decisions, and a coach that explains them.">
        <div className="grid gap-4 md:grid-cols-2">
          <SummaryCard
            icon={<FoodIcon />}
            title="Food OS — Food Decisions Built Around You."
            action={{ label: "Explore Food OS", href: "/food-os" }}
            footer={
              <ul className="mt-4 flex flex-wrap gap-2">
                {[
                  `${foodOsCounts.recipes} recipes`,
                  `${foodOsCounts.categories} food categories`,
                  `${foodOsCounts.tags} personalisation tags`,
                ].map((c) => (
                  <li key={c} className="badge badge-gold normal-case tracking-normal">
                    {c}
                  </li>
                ))}
              </ul>
            }
          >
            <p>
              Your goals, preferences and available health information help narrow the choices — with practical
              decisions about ingredients, preparation, portions, timing and eating order.
            </p>
          </SummaryCard>
          <SummaryCard icon={<ChatIcon />} title="Meet REVA. Your Personal AI Coach." action={{ label: "Meet REVA", href: "/reva" }}>
            <p>
              Ask about food, sleep, movement, stress or recovery. A useful answer explains the next action, why it
              matters, what to watch and what to track. Your history gives that answer context.
            </p>
          </SummaryCard>
        </div>
      </Section>

      {/* Founder preview */}
      <Section tone="alt">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12">
          <div className="mx-auto w-full max-w-[340px]">
            <Image
              src="/images/hero-founder-v4.jpg"
              alt="Mru Patel, Founder & CEO of MetaboliQ OS"
              width={852}
              height={820}
              sizes="(max-width: 768px) 80vw, 340px"
              className="h-auto w-full rounded-3xl border border-[var(--line-strong)] object-cover"
            />
          </div>
          <div>
            <Eyebrow>Founder’s journey</Eyebrow>
            <h2 className="gold-text mt-2 text-[clamp(1.9rem,4.4vw,3rem)] italic leading-tight">
              I Started by Measuring My Own Body.
            </h2>
            <div className="gold-line" />
            <p className="leading-relaxed text-text-secondary">
              I tracked food, glucose, blood pressure, body composition, blood markers, sleep, stress and movement. Over
              3,000 personal experiments helped shape what became MetaboliQ OS. I wanted to understand what changed, why
              it changed and what I should do next. That is the thinking behind this platform.
            </p>
            <p className="mt-4 font-semibold text-text-primary">Mru Patel, Founder &amp; CEO</p>
            <div className="mt-5">
              <ActionLink action={{ label: "My Journey & Evidence", href: "/about#founder-journey" }} variant="text" />
            </div>
          </div>
        </div>
      </Section>

      {/* Inventory strip — shown once (§3 build notes). */}
      <section aria-label="MetaboliQ OS in numbers" className="border-t border-[var(--line)] py-12">
        <div className="container-main">
          <dl className="grid grid-cols-3 gap-3 text-center">
            {inventory.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-2 py-5">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="gold-text block text-[clamp(1.5rem,5vw,2.6rem)] font-semibold leading-none">
                    {item.value}
                  </span>
                  <span className="mt-2 block text-[0.68rem] font-semibold uppercase tracking-wider text-text-muted sm:text-xs">
                    {item.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-center text-xs text-text-muted">
            {inventoryNote}{" "}
            <Link href="/about#evidence" className="font-semibold text-[var(--gold-ink)] underline-offset-4 hover:underline">
              Our Evidence
            </Link>
          </p>
        </div>
      </section>

      <CtaBand title="Discover your metabolism. Personalise your actions. Measure what changes." />
    </>
  );
}
