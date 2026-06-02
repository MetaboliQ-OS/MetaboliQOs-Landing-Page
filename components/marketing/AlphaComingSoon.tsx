"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";

export function AlphaComingSoon() {
  return (
    <section
      id="alpha"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(201,168,76,0.08), transparent 60%), #0d0d0d",
      }}
    >
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="badge badge-gold mb-4">Private Alpha</span>
          <h2
            className="mb-4 text-[clamp(2rem,4vw,3rem)] italic text-[#c9a84c]"
            style={{ fontFamily: "var(--font-head)" }}
          >
            Coming Soon
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-[#c8bfa8]">
            MetaboliQ OS is in active alpha — tested on my own biology, data-driven, and built in
            public. The full platform (REVA, Food OS, CGM, Blood OS, Wearables, FaceScan &
            Metabolic Memory) launches in phases.
          </p>
          <p className="mx-auto max-w-lg text-sm text-[#7a7060]">
            This page is the story behind what I am building — my proof, my journey, and the
            vision. Product access opens to founding members first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12 }}
          className="mt-10 flex justify-center"
        >
          <WaitlistForm />
        </motion.div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#my-story" className="btn-ghost">
            Read My Story
          </a>
          <a href="#platform" className="btn-ghost">
            See Platform Preview
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-[#7a7060]">
          Powered by MRRRU · MetaboliQ OS v7 · Not medical advice · My documented case study
        </p>
      </div>
    </section>
  );
}
