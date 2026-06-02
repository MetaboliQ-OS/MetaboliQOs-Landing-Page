"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CgmMetabolicPanels } from "@/components/marketing/CgmMetabolicPanels";

export function FounderStory() {
  return (
    <section id="my-story" className="section-pad">
      <div className="container-main">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="badge badge-gold">My Story</span>
          <span className="badge badge-amber">Phase 3 of 6 · My Active Journey</span>
        </div>

        <h2 className="gold-text mb-2 text-[clamp(2rem,4vw,3rem)] italic leading-tight">
          I Ran Too Fast
          <span className="mt-2 block text-[0.55em] not-italic text-[#c8bfa8]">
            And Forgot My Own Biology
          </span>
        </h2>
        <div className="gold-line" />

        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="glass card-hover rounded-2xl p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="badge badge-gold">My Proof Dashboard</span>
              <span className="text-xs text-[#7a7060]">My before → after · 5-month case study</span>
            </div>
            <h3 className="mb-2 text-xl text-[#c9a84c]">My journey becomes the product</h3>
            <p className="text-sm text-[#c8bfa8] leading-relaxed">
              My story feeds the MRRRU rules, FoodOS recipes, CGM experiments, behaviour loops,
              safety guardrails and Personal Metabolic Memory design in MetaboliQ OS.
            </p>
          </div>
          <div className="glass card-hover rounded-2xl p-5">
            <p className="text-sm text-[#c8bfa8]">
              <strong className="text-[#f5f0e8]">50 founding members only.</strong> First come,
              first served. Beta testers get founding member pricing locked for life + direct access
              to me.
            </p>
            <p className="mt-3 text-xs text-[#7a7060]">
              Visual examples are demo representations — not medical advice.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="badge badge-gold">My Transformation</span>
            <span className="text-xs text-[#7a7060]">
              Before → After · 5-month personal case study
            </span>
          </div>
          <div className="mx-auto w-full max-w-[min(94vw,820px)] overflow-hidden rounded-3xl border border-[rgba(201,168,76,0.35)] bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/images/founder-before-after.png"
              alt="Mru Patel before and after transformation — my 5 month metabolic journey with MetaboliQ OS"
              width={1122}
              height={1402}
              className="mx-auto h-auto w-full max-h-[min(62vh,560px)] object-contain sm:max-h-[min(68vh,640px)] lg:max-h-[min(72vh,700px)]"
              priority
              sizes="(max-width: 768px) 94vw, 820px"
            />
          </div>
          <p className="mt-3 text-center text-xs text-[#7a7060]">
            My documented transformation. Not medical advice. Individual results vary.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-[#c8bfa8] leading-relaxed"
          >
            <p>
              For decades, I believed that drive, discipline and output were the same as health. I
              built companies across multiple continents, flew red-eyes between time zones, ate late,
              slept little, and treated my body the way many of us do when building — as something to
              push rather than a system to maintain.
            </p>
            <p>
              I applied the same methodology I use to turn around distressed companies. I treated
              my own biology as a broken system requiring a structured turnaround — not willpower,{" "}
              <strong className="text-[#f5f0e8]">data</strong>. I sourced research from hundreds of
              global experts across metabolic medicine, endocrinology, chronobiology, nutrition
              science, longevity research and behavioural science.
            </p>
            <p>
              Then I became my own experiment — tracking every meal, glucose response, blood marker,
              sleep cycle and stress pattern. I documented everything in journals and built MRRRU
              from those journals.
            </p>
            <p>
              <strong className="text-[#c9a84c]">This is not a completed story.</strong> I am
              currently in Phase 3 of 6 — building toward Longevity Sovereignty & Personal Metabolic
              Memory. MetaboliQ OS is my daily operating system. Every feature you see here, I have
              lived and tested first.
            </p>
            <blockquote className="glass rounded-xl p-4 italic">
              &ldquo;I did not fix my metabolism with motivation. I fixed it with measurement,
              sequencing, and a system I could run every day.&rdquo;
              <footer className="mt-2 text-sm not-italic text-[#7a7060]">
                — Mru Patel, Creator of MetaboliQ OS
              </footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <CgmMetabolicPanels />

            <div className="glass rounded-2xl p-4">
              <p className="text-sm text-[#c8bfa8]">
                <strong className="text-[#c9a84c]">Phase 3: Food Intelligence & CGM</strong> —
                This is where I am now. CGM experiments, meal sequencing and glucose response data
                being mapped. I am sharing the journey publicly.
              </p>
              <p className="mt-2 text-xs text-[#7a7060]">
                My goal: Phase 6 Longevity — performance-grade health with minimal medication
                dependency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
