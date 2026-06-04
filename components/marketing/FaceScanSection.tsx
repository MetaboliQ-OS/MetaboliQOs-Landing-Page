"use client";

import { motion } from "framer-motion";
import {
  faceScanDisclaimer,
  faceScanFutureSignals,
  faceScanMetrics,
} from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function FaceScanSection() {
  return (
    <section
      id="face-scan"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#141414" }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Phase 2 · Camera Wellness"
          title="Face & Retina Scan — Camera Wellness Signals"
          subtitle="Phase 2 capability: camera-based wellness signal estimation using remote photoplethysmography (rPPG). Estimates heart rate and respiration rate with confidence. HRV, stress and recovery are proxy indicators only — not diagnostic measurements."
        />

        <div className="mb-8 rounded-xl border border-[rgba(232,151,58,0.25)] bg-[rgba(232,151,58,0.06)] p-4 text-sm leading-relaxed text-text-secondary">
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#E8973A]">
            Important
          </p>
          {faceScanDisclaimer}
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <p className="mb-3 text-sm font-semibold text-[#c9a84c]">60-Second Face & Retina Scan</p>
            <div className="relative mb-4 flex h-60 items-center justify-center overflow-hidden rounded-xl border-2 border-[rgba(201,168,76,0.2)] bg-[#0a0a0a]">
              <div className="scan-line absolute left-0 right-0 h-0.5 bg-[rgba(201,168,76,0.5)]" />
              <p className="text-center text-sm text-text-muted">
                Camera feed will appear here
                <br />
                <span className="text-xs">Ensure good lighting, keep face still</span>
              </p>
              <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-sm font-bold text-[#c9a84c]">
                60s
              </span>
            </div>
            <ul className="mb-4 space-y-1 text-xs text-text-secondary">
              <li>Good lighting required</li>
              <li>Face centred in frame</li>
              <li>Minimal movement</li>
            </ul>
            <p className="mb-4 text-[0.65rem] text-text-muted">
              Privacy: FaceScan data is processed locally where possible. Session ID, lighting
              quality score, motion score and signal estimates are stored — no facial images are
              retained unless you consent.
            </p>
            <div className="flex gap-3">
              <button type="button" className="btn-gold flex-1 justify-center text-sm">
                Start 60s Face + Retina Scan
              </button>
              <button type="button" className="btn-ghost text-sm">
                Stop
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
          >
            <p className="mb-4 text-sm font-semibold text-[#c9a84c]">REVA Wellness Signal Analysis</p>
            <div className="mb-4 grid grid-cols-2 gap-3">
              {faceScanMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#0d0d0d] p-4 text-center"
                >
                  <div className="text-2xl font-bold text-text-muted">—</div>
                  <p className="text-xs font-semibold text-text-primary">{m.label}</p>
                  <p className="text-[0.65rem] text-text-muted">{m.note}</p>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <p className="mb-1 text-xs text-text-muted">Signal Quality Score</p>
              <div className="h-2 overflow-hidden rounded-full bg-[#1c1c1c]">
                <div className="h-full w-0 bg-gradient-to-r from-[#8b6914] to-[#c9a84c]" />
              </div>
            </div>
            <p className="mb-6 text-xs text-text-muted">
              Complete a Face & Retina Scan demo to get REVA wellness signal interpretation.
            </p>
            <div className="space-y-3">
              {faceScanFutureSignals.map((s) => (
                <div
                  key={s.title}
                  className="rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#111] p-3"
                >
                  <p className="text-xs font-bold text-[#c9a84c]">{s.title}</p>
                  <p className="text-xs text-text-secondary">{s.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[0.65rem] text-text-muted">
              Clinical note: BP and SpO2 trends from camera are not validated without specific
              hardware. Do not rely on these estimates for medical decisions. Cortisol is not
              directly measured — stress score is a composite proxy from HR, HRV proxy, voice and
              sleep context.
            </p>
            <p className="mt-4 text-xs text-text-muted">
              No scans completed yet. Complete your first Face & Retina Scan to begin trend
              tracking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
