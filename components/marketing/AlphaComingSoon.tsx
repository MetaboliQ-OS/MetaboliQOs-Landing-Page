"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  JourneyMarkerTimeline,
  MarkerColumn,
} from "@/components/marketing/JourneyMarkerTimeline";
import { journeyMarkersAfter, journeyMarkersBefore } from "@/lib/marketing-content";

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
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="badge badge-gold mb-4">Private Alpha</span>
          <h2
            className="mb-4 text-[clamp(2rem,4vw,3rem)] italic text-[#c9a84c]"
            style={{ fontFamily: "var(--font-head)" }}
          >
            Coming Soon
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-text-secondary">
            MetaboliQ OS is in active alpha — tested on my own biology, data-driven, and built in
            public. The full platform (REVA, Food OS, CGM, Blood OS, Wearables, FaceScan &
            Metabolic Memory) launches in phases.
          </p>
          <p className="mx-auto max-w-lg text-sm text-text-muted">
            This page is the story behind what I am building — my proof, my journey, and the
            vision. Product access opens to founding members first.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] xl:gap-8"
        >
          <div className="hidden xl:block">
            <MarkerColumn
              period="July 2025"
              subtitle="Before · blood & body markers"
              markers={journeyMarkersBefore}
              tone="before"
            />
          </div>

          <div className="flex justify-center">
            <WaitlistForm />
          </div>

          <div className="hidden space-y-4 xl:block">
            <div className="rounded-2xl border border-[rgba(201,168,76,0.35)] bg-gradient-to-br from-[rgba(201,168,76,0.12)] to-[rgba(0,0,0,0.35)] p-4 text-center">
              <p
                className="text-[clamp(1rem,1.8vw,1.25rem)] leading-snug text-[#e8c76a]"
                style={{ fontFamily: "var(--font-head)" }}
              >
                Looking for the right 50 founding members only
              </p>
            </div>
            <MarkerColumn
              period="Dec 2025"
              subtitle="After · blood & body markers"
              markers={journeyMarkersAfter}
              tone="after"
            />
          </div>
        </motion.div>

        <div className="mt-8 xl:hidden">
          <JourneyMarkerTimeline />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#my-story" className="btn-ghost">
            Read My Story
          </a>
          <a href="#demo-platform" className="btn-ghost">
            See Platform Preview
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-text-muted">
          Powered by MRRRU · MetaboliQ OS v7 · Not medical advice · My documented case study
        </p>
      </div>
    </section>
  );
}
