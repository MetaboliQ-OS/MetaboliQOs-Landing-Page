"use client";

import { m } from "framer-motion";
import { cgmContexts, cgmTargetZones, cgmUploadNote } from "@/lib/marketing-content";
import { CgmMetabolicPanels } from "./CgmMetabolicPanels";
import { SectionHeading } from "./SectionHeading";

export function CgmSection() {
  return (
    <section
      id="cgm"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Glucose Tracking"
          title="Log Your Glucose. See What Your Body Is Doing."
          subtitle="Stop guessing after meals. Upload a CGM screenshot, log a reading manually, or track fasting and post-meal numbers. REVA reads the pattern and tells you what to do next — what to eat, when to walk, and what to watch."
        />

        <div className="mb-8 rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.04)] p-5">
          <p className="mb-1 text-sm font-semibold text-[#c9a84c]">Upload CGM Screenshot or Photo</p>
          <p className="text-sm text-text-secondary">{cgmUploadNote}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className="btn-gold text-sm">
              Upload CGM Photo
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-4 text-lg font-semibold text-[#c9a84c]">Log a Reading</h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="cgm-reading-time"
                  className="mb-1 block text-xs uppercase tracking-wider text-text-muted"
                >
                  Time
                </label>
                <input
                  id="cgm-reading-time"
                  type="datetime-local"
                  className="w-full rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2 text-sm text-text-primary outline-none"
                  readOnly
                  aria-readonly
                />
              </div>
              <div>
                <label
                  htmlFor="cgm-glucose-value"
                  className="mb-1 block text-xs uppercase tracking-wider text-text-muted"
                >
                  Glucose (mmol/L)
                </label>
                <input
                  id="cgm-glucose-value"
                  type="text"
                  placeholder="e.g. 5.4"
                  className="w-full rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2 text-sm text-text-primary outline-none"
                  readOnly
                  aria-readonly
                />
              </div>
              <div>
                <label
                  htmlFor="cgm-reading-context"
                  className="mb-1 block text-xs uppercase tracking-wider text-text-muted"
                >
                  Context
                </label>
                <select
                  id="cgm-reading-context"
                  className="w-full rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2 text-sm text-text-secondary outline-none"
                  defaultValue={cgmContexts[0]}
                  aria-readonly
                >
                  {cgmContexts.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="cgm-reading-notes"
                  className="mb-1 block text-xs uppercase tracking-wider text-text-muted"
                >
                  Notes (optional)
                </label>
                <input
                  id="cgm-reading-notes"
                  type="text"
                  placeholder="What did you eat? Exercise? Stress level?"
                  className="w-full rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2 text-sm text-text-primary outline-none"
                  readOnly
                  aria-readonly
                />
              </div>
              <button type="button" className="btn-gold w-full justify-center text-sm">
                + Log Reading
              </button>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-text-muted">
                MRRRU Target Zones
              </p>
              <div className="space-y-2">
                {cgmTargetZones.map((z) => (
                  <div
                    key={z.range}
                    className="flex items-start justify-between gap-3 rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#111] px-3 py-2"
                  >
                    <span className="text-sm font-semibold" style={{ color: z.color }}>
                      {z.range}
                    </span>
                    <span className="text-right text-xs text-text-secondary">{z.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Log your first reading to see 7-day trend analysis.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              Founder — CGM, Wearables & Daily Metabolic Monitoring
            </p>
            <CgmMetabolicPanels />
          </m.div>
        </div>
      </div>
    </section>
  );
}
