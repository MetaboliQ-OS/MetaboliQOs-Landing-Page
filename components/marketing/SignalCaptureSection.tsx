"use client";

import { m } from "framer-motion";
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
          badge="How It Works"
          title="Scan Your Food. Log Your Signals. Let REVA Tell You What To Do Next."
          subtitle="Stop guessing. See your signals. Get one clear next action. Take a photo of your meal. Log your glucose, sleep, stress, BP or wearable data. Run a Face & Retina wellness scan when available. REVA tells you what to eat, what to adjust, what to watch, and what to track next."
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
              <m.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#141414] p-4 text-center"
              >
                <p className="mb-1 text-sm font-bold text-[#c9a84c]">{item.title}</p>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </m.div>
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
              { id: "checkin-energy", label: "Energy level (1-10)", value: 5 },
              { id: "checkin-stress", label: "Stress level (1-10)", value: 3 },
              { id: "checkin-hunger", label: "Hunger level (1-10)", value: 4 },
              { id: "checkin-sleep", label: "Sleep quality (1-10)", value: 6 },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="mb-2 block text-xs text-text-muted">
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type="range"
                  min={1}
                  max={10}
                  defaultValue={field.value}
                  className="w-full accent-[#c9a84c]"
                  readOnly
                  aria-readonly
                  aria-valuenow={field.value}
                  aria-valuemin={1}
                  aria-valuemax={10}
                />
                <span className="text-sm font-semibold text-[#c9a84c]">{field.value}</span>
              </div>
            ))}
          </div>
          <button type="button" className="btn-gold mt-6 text-sm">
            Submit Check-In
          </button>
          <p className="mt-3 text-xs text-text-muted">
            Submit your check-in to get today&apos;s next action from REVA.
          </p>
        </div>
      </div>
    </section>
  );
}
