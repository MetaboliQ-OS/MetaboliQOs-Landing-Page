"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BioImpedanceReadings } from "@/components/marketing/BioImpedanceReadings";
import { CgmMetabolicPanels } from "@/components/marketing/CgmMetabolicPanels";

export function FounderStory() {
  return (
    <section id="my-story" className="section-pad">
      <div className="container-main">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="badge badge-gold">My Story</span>
          <span className="badge badge-amber">
            Phase 3 · Food Intelligence, Wearables, BIA & CGM
          </span>
        </div>

        <h2 className="gold-text mb-2 text-[clamp(2rem,4vw,3rem)] italic leading-tight">
          I Ran Too Fast
          <span className="mt-2 block text-[0.55em] not-italic text-text-secondary">
            And Forgot My Own Biology
          </span>
        </h2>
        <div className="gold-line" />

        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="glass card-hover rounded-2xl p-5">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <span className="badge badge-gold">My Proof Dashboard</span>
              <span className="text-xs text-text-muted">My before → after · 5-month case study</span>
            </div>
            <h3 className="mb-2 text-xl text-[#c9a84c]">My journey becomes the product</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              My story feeds the MRRRU rules, FoodOS recipes, CGM experiments, bio-impedance scale
              readings, behaviour loops, safety guardrails and Personal Metabolic Memory design in
              MetaboliQ OS.
            </p>
          </div>
          <div className="glass card-hover rounded-2xl p-5 flex flex-col justify-center">
            <p
              className="text-lg leading-snug text-[#e8c76a]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Founding members get VIP priority access
            </p>
            <a href="#founding" className="btn-ghost mt-4 w-fit text-sm">
              Join the founding list →
            </a>
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
            <span className="text-xs text-text-muted">
              Before → After · 5-month personal case study
            </span>
          </div>

          <p className="mb-6 max-w-3xl text-sm leading-relaxed text-text-secondary">
            The same person, five months apart — documented on bio-impedance scales, blood markers,
            CGM and daily journals. July: higher visceral load and metabolic stress. December:
            leaner midsection, stronger recovery and the system that became MetaboliQ OS.
          </p>

          <div className="mx-auto grid w-full max-w-[720px] grid-cols-2 gap-4 sm:max-w-[840px] sm:gap-5 md:max-w-[960px]">
            <figure className="flex min-w-0 flex-col">
              <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-xl border border-[rgba(201,168,76,0.35)] bg-[#0a0a0a] sm:h-[300px] md:h-[340px]">
                <Image
                  src="/images/founder-before-after.png"
                  alt="Mru Patel before and after transformation — MetaboliQ OS coming soon poster"
                  width={1122}
                  height={1402}
                  className="max-h-full max-w-full object-contain object-center"
                  priority
                  sizes="(max-width: 768px) 44vw, 460px"
                />
              </div>
              <figcaption className="mt-2 text-center text-[0.65rem] text-text-muted sm:text-xs">
                Before → After · MetaboliQ OS founder journey
              </figcaption>
            </figure>

            <figure className="flex min-w-0 flex-col">
              <div className="flex h-[260px] items-center justify-center overflow-hidden rounded-xl border border-[rgba(74,158,232,0.25)] bg-[#050810] p-1.5 sm:h-[300px] sm:p-2 md:h-[340px]">
                <Image
                  src="/images/founder-july-december-2025.png"
                  alt="Mru Patel — July 2025 before and December 2025 after, side by side"
                  width={900}
                  height={1200}
                  className="max-h-full max-w-full object-contain object-center"
                  sizes="(max-width: 768px) 44vw, 460px"
                />
              </div>
              <figcaption className="mt-3">
                <div className="grid grid-cols-2 gap-2 text-center sm:gap-3">
                  <div className="rounded-xl border border-[rgba(224,82,82,0.25)] bg-[rgba(224,82,82,0.06)] px-2 py-2 sm:px-3 sm:py-2.5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#E05252]">
                      July 2025
                    </p>
                    <p className="mt-1 text-xs text-text-muted">Before · baseline</p>
                  </div>
                  <div className="rounded-xl border border-[rgba(76,175,125,0.25)] bg-[rgba(76,175,125,0.06)] px-2 py-2 sm:px-3 sm:py-2.5">
                    <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#4CAF7D]">
                      December 2025
                    </p>
                    <p className="mt-1 text-xs text-text-muted">After · 5 months</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <p className="mt-4 text-center text-xs text-text-muted">
            Weight <strong className="text-text-secondary">83 kg → 69 kg</strong> · visceral fat{" "}
            <strong className="text-text-secondary">15–16 → 11</strong> · HbA1c{" "}
            <strong className="text-text-secondary">8.3% → 5.3%</strong> · no GLP-1 ·
            clinician-supervised personal data. Not medical advice. Individual results vary.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5 text-text-secondary leading-relaxed"
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
              <strong className="text-text-primary">data</strong>. I sourced research from hundreds of
              global experts across metabolic medicine, endocrinology, chronobiology, nutrition
              science, longevity research and behavioural science.
            </p>
            <p>
              Then I became my own experiment — tracking every meal, glucose response, blood marker,
              bio-impedance scale readings, sleep cycle and stress pattern. I documented everything
              in journals and built MRRRU from those journals.
            </p>

            <BioImpedanceReadings />
            <p>
              <strong className="text-[#c9a84c]">This is not a completed story.</strong> I am
              currently in Phase 3 of 6 — building toward Longevity Sovereignty & Personal Metabolic
              Memory. MetaboliQ OS is my daily operating system. Every feature you see here, I have
              lived and tested first.
            </p>
            <blockquote className="glass rounded-xl p-4 italic">
              &ldquo;I did not fix my metabolism with motivation. I fixed it with measurement,
              sequencing, and a system I could run every day.&rdquo;
              <footer className="mt-2 text-sm not-italic text-text-muted">
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
            <div className="rounded-2xl border border-[rgba(201,168,76,0.35)] bg-gradient-to-br from-[rgba(201,168,76,0.12)] to-[rgba(0,0,0,0.35)] p-5">
              <span className="badge badge-amber mb-3">Private beta</span>
              <h3
                className="text-[clamp(1.15rem,2.5vw,1.45rem)] leading-snug text-[#e8c76a]"
                style={{ fontFamily: "var(--font-head)" }}
              >
                Founding members get VIP priority access
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                First come, first served. Beta testers get founding member pricing locked for life
                and direct access to me — not a mass launch.
              </p>
              <a
                href="#founding"
                className="btn-gold mt-4 inline-flex text-sm"
              >
                Secure your spot →
              </a>
            </div>

            <CgmMetabolicPanels />

            <div className="glass rounded-2xl p-4">
              <p className="text-sm text-text-secondary">
                <strong className="text-[#c9a84c]">
                  Phase 3: Food Intelligence, Wearables, Bio Impedance & CGM
                </strong>{" "}
                — Food OS, wearable sync, bio-impedance scales and CGM experiments. Sleep and
                movement feed Personal Metabolic Memory next.
              </p>
              <p className="mt-2 text-xs text-text-muted">
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
