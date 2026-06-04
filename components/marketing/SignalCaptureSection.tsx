"use client";

import { motion } from "framer-motion";
import {
  personalMemoryLayers,
  revaDecisionStandard,
  signalCaptureRoutes,
} from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function SignalCaptureSection() {
  return (
    <section
      id="signal-capture"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{
        background: "linear-gradient(180deg, #141414 0%, #0d0d0d 100%)",
      }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Signal Capture Suite"
          title="Signal Capture Suite"
          subtitle="The metabolic decision layer that turns food, glucose, camera wellness signals, biomarkers, sleep, stress, movement, gut signals and personal memory into the next best action. Every signal routes to REVA and the MRRRU rules engine."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {signalCaptureRoutes.map((route) => (
            <span
              key={route}
              className="rounded-full border border-[rgba(201,168,76,0.2)] bg-[#111] px-4 py-2 text-xs font-semibold text-text-secondary"
            >
              {route}
            </span>
          ))}
        </div>

        <div className="mb-10 rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] p-6">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-[#c9a84c]">
            REVA Decision Standard — Every Answer Must Include
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {revaDecisionStandard.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#141414] p-4 text-center"
              >
                <p className="mb-1 text-sm font-bold text-[#c9a84c]">{item.title}</p>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="mb-2 text-xl text-[#c9a84c]">Personal Metabolic Memory</h3>
          <p className="mb-6 max-w-2xl text-sm text-text-secondary">
            REVA learns your patterns over time. Not just preferences — actual repeated response
            loops. Every scan, check-in and biomarker reading strengthens your metabolic fingerprint.
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {personalMemoryLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-xl border border-[rgba(201,168,76,0.12)] bg-[#141414] p-4"
              >
                <p className="mb-1 text-sm font-bold text-text-primary">{layer.title}</p>
                <p className="text-xs text-text-muted">{layer.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <div className="rounded-xl border border-[rgba(201,168,76,0.2)] bg-[#111] px-5 py-3">
              <span className="text-xs uppercase tracking-wider text-text-muted">
                Memory Score
              </span>
              <div className="text-2xl font-bold text-[#c9a84c]">0/100</div>
              <span className="text-xs text-text-muted">Profile completeness</span>
            </div>
            <button type="button" className="btn-ghost text-sm">
              Export Memory Report
            </button>
            <a href="/reva" className="btn-gold text-sm">
              Ask REVA About My Patterns
            </a>
          </div>
        </div>

        <div className="glass rounded-2xl p-6">
          <h3 className="mb-2 text-lg text-[#c9a84c]">REVA Voice Check-In</h3>
          <p className="mb-6 text-sm text-text-secondary">
            Daily check-in captures your state: energy, hunger, cravings, stress, symptoms. REVA
            scores your day and suggests the next best action aligned to your phase.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Energy level (1-10)", value: 5 },
              { label: "Stress level (1-10)", value: 3 },
              { label: "Hunger level (1-10)", value: 4 },
              { label: "Sleep quality (1-10)", value: 6 },
            ].map((field) => (
              <div key={field.label}>
                <label className="mb-2 block text-xs text-text-muted">{field.label}</label>
                <input
                  type="range"
                  min={1}
                  max={10}
                  defaultValue={field.value}
                  className="w-full accent-[#c9a84c]"
                  readOnly
                  aria-readonly
                />
                <span className="text-sm font-semibold text-[#c9a84c]">{field.value}</span>
              </div>
            ))}
          </div>
          <button type="button" className="btn-gold mt-6 text-sm">
            Submit Check-In
          </button>
          <p className="mt-3 text-xs text-text-muted">
            Submit your check-in to get today&apos;s REVA guidance (alpha preview).
          </p>
        </div>
      </div>
    </section>
  );
}
