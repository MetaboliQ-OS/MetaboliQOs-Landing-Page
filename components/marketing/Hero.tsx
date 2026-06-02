"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroStats, socialLinks } from "@/lib/marketing-content";

function FounderPortrait({ className = "" }: { className?: string }) {
  // smooth all-edge vignette so the photo's background dissolves into the page
  const featherMask =
    "radial-gradient(ellipse 78% 88% at 50% 43%, #000 52%, rgba(0,0,0,0.6) 76%, transparent 100%)";
  return (
    <div className={`relative ${className}`}>
      {/* soft gold halo behind the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 66% 62% at 50% 42%, rgba(201,168,76,0.16), transparent 70%)",
        }}
      />
      <Image
        src="/images/hero-founder-v4.png?v=4"
        alt="Mru Patel — building MetaboliQ OS"
        width={852}
        height={820}
        className="h-auto w-full object-contain object-center"
        priority
        unoptimized
        sizes="(max-width: 768px) 300px, 360px"
        style={{ WebkitMaskImage: featherMask, maskImage: featherMask }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      style={{ background: "#000" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.07) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10 grid gap-8 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center lg:gap-6 xl:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.07)] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#c9a84c]"
              style={{ fontFamily: "var(--font-condensed)" }}
            >
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#4CAF7D]" />
              Private Alpha · Platform In Build
            </div>
            <span className="badge badge-green">Phase 3 of 6 · Active Journey</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="badge badge-gold">Personally Proven · No GLP-1 · No Shortcuts</span>
            <span className="badge badge-amber">200+ Personal Experiments</span>
            <span className="badge badge-green">Zero Paid Sponsors</span>
          </div>

          <h1 className="mb-6 text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.05]">
            <span className="block">Your Metabolic</span>
            <span className="gold-text block">Operating System</span>
            <span className="mt-2 block text-[0.55em] italic text-[#c8bfa8]">
              Built from My Real Data
            </span>
          </h1>

          {/* Mobile / tablet portrait — fills gap below headline */}
          <div className="mb-6 flex justify-center lg:hidden">
            <FounderPortrait className="w-[min(78vw,320px)]" />
          </div>

          <p className="mb-4 max-w-xl text-lg text-[#c8bfa8] leading-relaxed">
            HbA1c from <strong className="text-[#E05252]">8.3%</strong> to{" "}
            <strong className="text-[#4CAF7D]">5.3%</strong>. BP from{" "}
            <strong className="text-[#E05252]">212/109</strong> to{" "}
            <strong className="text-[#4CAF7D]">124/80</strong>. Visceral fat from{" "}
            <strong className="text-[#E05252]">15–16</strong> to{" "}
            <strong className="text-[#4CAF7D]">11–12</strong>. Five months. No drugs.
            Documented daily.
          </p>

          <p className="mb-8 max-w-xl text-[0.95rem] text-[#7a7060]">
            My longevity journey — documented in real time. Not a static programme. Follow along
            as I build MetaboliQ OS through alpha.
          </p>

          <div className="mb-8 flex flex-wrap gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
                style={{ background: s.color }}
              >
                {s.name}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#platform" className="btn-gold">
              Explore Alpha Platform →
            </a>
            <a href="#my-story" className="btn-ghost">
              My Story
            </a>
            <a href="#alpha" className="btn-ghost border-[rgba(201,168,76,0.45)] text-[#c9a84c]">
              Coming Soon
            </a>
          </div>
        </motion.div>

        {/* Desktop center — between copy and stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="hidden shrink-0 self-center justify-self-center lg:flex lg:justify-center"
        >
          <FounderPortrait className="w-[300px] xl:w-[360px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden shrink-0 flex-col gap-3 lg:flex"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl px-5 py-4">
              <div
                className={`text-3xl font-bold ${stat.color}`}
                style={{ fontFamily: "var(--font-head)" }}
              >
                {stat.value}
              </div>
              <div className="text-[0.72rem] uppercase tracking-[0.1em] text-[#7a7060]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
