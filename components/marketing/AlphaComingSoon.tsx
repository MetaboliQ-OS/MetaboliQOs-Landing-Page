"use client";

import { m } from "framer-motion";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  JourneyMarkerTimeline,
  MarkerColumn,
} from "@/components/marketing/JourneyMarkerTimeline";
import { journeyMarkersAfter, journeyMarkersBefore } from "@/lib/marketing-content";

const sectionScrollClass = "scroll-mt-24";

export function AlphaComingSoon() {
  return (
    <>
      <section
        id="alpha"
        className={`section-pad border-t border-[rgba(201,168,76,0.12)] ${sectionScrollClass}`}
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,168,76,0.08), transparent 60%), #0d0d0d",
        }}
      >
        <div className="container-main">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="badge badge-gold mb-4">Private Beta</span>
            <h2
              className="mb-4 text-[clamp(2rem,4vw,3rem)] italic text-[#c9a84c]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Join The Private Beta
            </h2>
            <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-text-secondary">
              MetaboliQ OS is being built in public from my own documented journey. Beta members
              will help test the app, give feedback, shape the features, and get early access
              before public launch.
            </p>
            <p className="mx-auto max-w-lg text-sm text-text-muted">
              Founding members get VIP priority, early pricing benefits and closer access to the
              build journey. No payment today. No auto-charge. No data sold. You can unsubscribe
              anytime.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#waitlist" className="btn-gold">
                Apply For Beta Access →
              </a>
              <a href="#founding" className="btn-ghost border-[rgba(201,168,76,0.45)] text-[#c9a84c]">
                Join As Founding Member
              </a>
            </div>
          </m.div>
        </div>
      </section>

      <section
        className={`section-pad border-t border-[rgba(201,168,76,0.18)] ${sectionScrollClass}`}
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(201,168,76,0.1), transparent 55%), #0b0a09",
        }}
      >
        <div id="founding" className="scroll-mt-24" aria-hidden />
        <div id="waitlist" className="scroll-mt-24" aria-hidden />

        <div className="container-main">
          <m.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <span className="badge badge-gold mb-4">Apply Now</span>
            <h2
              className="mb-4 text-[clamp(1.8rem,3.5vw,2.6rem)] leading-tight text-[#e8c76a]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              Beta &amp; Founding Access
            </h2>
            <p className="text-sm leading-relaxed text-text-secondary">
              One application for everyone. Choose beta access or founding member — founders are
              tagged VIP for priority review and early pricing benefits.
            </p>
          </m.div>

          <m.div
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
                  Founding members get VIP priority — curated, not mass launch
                </p>
              </div>
              <MarkerColumn
                period="Dec 2025"
                subtitle="After · blood & body markers"
                markers={journeyMarkersAfter}
                tone="after"
              />
            </div>
          </m.div>

          <div className="mt-8 xl:hidden">
            <JourneyMarkerTimeline />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#my-story" className="btn-ghost">
              Read My Story
            </a>
            <a href="#demo-platform" className="btn-ghost">
              See Your Daily Cockpit
            </a>
          </div>
          <p className="mt-8 text-center text-xs text-text-muted">
            Powered by MRRRU · MetaboliQ OS v7 · Not medical advice · My documented case study
          </p>
        </div>
      </section>
    </>
  );
}
