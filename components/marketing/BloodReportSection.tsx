"use client";

import { motion } from "framer-motion";
import { bloodAnalysisLegend, bloodMarkerChips } from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function BloodReportSection() {
  return (
    <section
      id="blood"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Blood Marker OS"
          title={
            <>
              Upload &amp; Analyse Your <span className="not-italic">Blood Reports</span>
            </>
          }
          subtitle="Upload your lab report (PDF or image). REVA reads every marker, flags borderline values, identifies risk signals, highlights wins, and maps results to your MRRRU phase protocol."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <p className="mb-3 text-sm font-semibold text-[#c9a84c]">Upload Lab Report</p>
            <div className="mb-4 flex min-h-[140px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-[rgba(201,168,76,0.25)] bg-[#0a0a0a] px-4 text-center">
              <p className="text-sm font-semibold text-text-secondary">
                Tap or drag your blood test PDF or image
              </p>
              <p className="mt-1 text-xs text-text-muted">
                PDF, JPG, PNG — lab reports from any provider
              </p>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {bloodMarkerChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[rgba(201,168,76,0.2)] px-3 py-1 text-xs text-text-secondary"
                >
                  {chip}
                </span>
              ))}
            </div>
            <button type="button" className="btn-gold w-full justify-center text-sm">
              Analyse with REVA
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="mb-4 text-sm font-semibold text-[#c9a84c]">What REVA Analyses</p>
            <ul className="space-y-3">
              {bloodAnalysisLegend.map((item) => (
                <li
                  key={item.label}
                  className="flex gap-3 rounded-xl border border-[rgba(201,168,76,0.12)] bg-[#141414] p-4"
                >
                  <span
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: item.color }}
                  />
                  <div>
                    <p className="text-sm font-bold text-text-primary">{item.label}</p>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg border border-[rgba(224,82,82,0.2)] bg-[rgba(224,82,82,0.06)] p-3 text-xs text-text-muted">
              REVA analysis is educational intelligence, not medical diagnosis. Always review with
              your clinician.
            </p>
            <div className="mt-6 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#111] p-5 text-sm text-text-muted">
              Upload a blood test result to receive a structured MRRRU analysis: flags, trends,
              protocol recommendations and phase alignment.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
