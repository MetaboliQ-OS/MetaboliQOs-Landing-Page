"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { m } from "framer-motion";
import { RevaChatPanel } from "@/components/marketing/RevaChatPanel";
import {
  revaCapabilities,
  revaDecisionOutputs,
  revaLetters,
  revaQuickPrompts,
  revaSignalInputs,
} from "@/lib/marketing-content";

export function RevaPageContent() {
  return (
    <div className="container-main py-10 md:py-14">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-text-secondary transition hover:text-[#c9a84c]"
      >
        ← Back to MetaboliQ OS
      </Link>

      <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 max-w-3xl"
      >
        <span className="badge badge-gold mb-4">AI Command Center</span>
        <h1
          className="gold-text mb-3 text-[clamp(2.2rem,5vw,3.2rem)] italic leading-tight"
          style={{ fontFamily: "var(--font-head)" }}
        >
          REVA — Your Personal Metabolic Intelligence
        </h1>
        <div className="gold-line" />
        <p className="text-lg leading-relaxed text-text-secondary">
          REVA (Revamp · Execute · Vitality · Advisor) is the decision engine of MetaboliQ OS —
          trained on the MRRRU framework, my documented transformation, and your Personal Metabolic
          Memory. Not a chatbot wall. A metabolic advisor that tells you what to do next.
        </p>
      </m.div>

      <Suspense fallback={null}>
        <RevaChatPanel />
      </Suspense>

      <m.figure
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="mx-auto mb-12 w-full max-w-[min(92vw,520px)]"
      >
        <div className="overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.28)] bg-[#0a0a0a] p-3 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
          <Image
            src="/images/reva-stands-for.png"
            alt="REVA stands for Revamp, Execute, Vitality, Advisor — your personal metabolic transformation guide"
            width={1200}
            height={675}
            className="mx-auto h-auto max-h-[min(42vh,320px)] w-full object-contain"
            priority
            sizes="(max-width: 520px) 92vw, 520px"
          />
        </div>
        <figcaption className="mt-3 text-center text-xs leading-relaxed text-text-muted">
          Your personal metabolic transformation guide · powered by MRRRU &amp; MetaboliQ OS
        </figcaption>
      </m.figure>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
          What REVA stands for
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {revaLetters.map((item) => (
            <div
              key={item.letter}
              className="glass rounded-2xl border border-[rgba(201,168,76,0.15)] p-4"
            >
              <span
                className="text-3xl font-black"
                style={{ fontFamily: "var(--font-head)", color: item.color }}
              >
                {item.letter}
              </span>
              <p className="mt-1 text-sm font-bold text-text-primary">{item.word}</p>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="mb-3 text-xl text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
            What REVA does
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-text-secondary">
            Text, voice, image and file capable. Every answer is structured for action — not
            generic wellness advice. REVA reads your signals, applies MRRRU phase logic, and
            returns what matters today.
          </p>
          <ul className="space-y-2">
            {revaCapabilities.map((cap) => (
              <li
                key={cap}
                className="flex items-center gap-2 text-sm text-text-secondary before:text-[#4CAF7D] before:content-['✓']"
              >
                {cap}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-6">
          <h2 className="mb-3 text-xl text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
            Every REVA response includes
          </h2>
          <ul className="mb-6 space-y-3">
            {revaDecisionOutputs.map((out) => (
              <li
                key={out}
                className="rounded-xl border border-[rgba(201,168,76,0.12)] bg-[#0d0d0d] px-4 py-3 text-sm font-medium text-text-primary"
              >
                {out}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-text-secondary">
            Example: &ldquo;Eat protein and greens first, starch last. Walk 12 minutes after lunch.
            Log 2hr glucose if using CGM.&rdquo; — with the reason, risk and metric behind it.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
          Signals REVA uses
        </h2>
        <p className="mb-6 max-w-2xl text-sm text-text-secondary">
          REVA does not operate in a vacuum. It connects food, glucose, wearables, scales, blood
          work and behaviour into one decision context — the same fabric as your daily cockpit.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {revaSignalInputs.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[rgba(201,168,76,0.12)] bg-[#111] p-4"
            >
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-2 font-semibold text-text-primary">{s.label}</p>
              <p className="mt-1 text-xs text-text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 glass rounded-2xl p-6 md:p-8">
        <h2 className="mb-3 text-xl text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
          Built from real experiments — not generic AI
        </h2>
        <p className="text-sm leading-relaxed text-text-secondary">
          The next phase of REVA is powered by <strong className="text-text-primary">10,000+ rules</strong>{" "}
          from my personal experiments (I was my own guinea pig), expert data after verification,
          and extrapolations by sex, ethnicity, medical conditions and age. Food OS adds thousands
          of international verified recipes with a REVA adaptation agent that reshapes meals to
          your goals and phase.
        </p>
        <blockquote className="mt-5 rounded-xl border border-l-[3px] border-[rgba(201,168,76,0.15)] border-l-[#c9a84c] bg-[rgba(0,0,0,0.35)] px-4 py-4 italic text-text-secondary">
          &ldquo;Hello. I am REVA — your personal metabolic intelligence. I am trained on the
          MRRRU framework, the founder&apos;s documented transformation data, and your personal
          metabolic memory. Ask me about your phase, glucose patterns, food choices, blood markers,
          cortisol, or anything on your longevity journey. I remember what matters.&rdquo;
        </blockquote>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl text-[#c9a84c]" style={{ fontFamily: "var(--font-head)" }}>
          Example prompts
        </h2>
        <p className="mb-4 text-sm text-text-muted">
          In the full platform you can type, speak or attach files. Demo prompts below mirror the
          alpha build.
        </p>
        <div className="mb-4 rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#0d0d0d] p-3">
          <p className="mb-2 text-[0.58rem] font-bold uppercase tracking-wider text-text-muted">
            Try asking REVA
          </p>
          <div className="flex items-center gap-2">
            <div className="flex-1 rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2.5 text-sm text-text-secondary">
              Scan my lunch and tell me what to do next
            </div>
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.1)] text-lg"
              aria-hidden
            >
              🎤
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {revaQuickPrompts.map((prompt) => (
            <span
              key={prompt}
              className="rounded-full border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] px-3 py-1.5 text-xs text-text-secondary"
            >
              {prompt}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-[rgba(201,168,76,0.35)] bg-gradient-to-br from-[rgba(201,168,76,0.12)] to-[rgba(0,0,0,0.4)] p-8 text-center">
        <h2
          className="mb-3 text-2xl text-[#e8c76a]"
          style={{ fontFamily: "var(--font-head)" }}
        >
          REVA ships with MetaboliQ OS alpha
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-sm text-text-secondary">
          Full interactive REVA chat, memory and file upload are in the platform build. Join the
          founding list for early access.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/#founding" className="btn-gold">
            Join founding waitlist →
          </Link>
          <Link href="/#demo-platform" className="btn-ghost">
            See cockpit preview
          </Link>
        </div>
      </section>
    </div>
  );
}
