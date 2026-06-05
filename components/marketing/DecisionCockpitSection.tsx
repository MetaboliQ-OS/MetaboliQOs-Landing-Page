"use client";

import { m } from "framer-motion";
import { decisionCockpitDemo } from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function DecisionCockpitSection() {
  return (
    <section
      id="decision-cockpit"
      className="section-pad border-t border-[rgba(201,168,76,0.12)]"
      style={{ background: "#141414" }}
    >
      <div className="container-main">
        <SectionHeading
          badge="Daily Decision"
          title="One Screen. One Decision. One Next Step."
          subtitle="Not another dashboard full of numbers. REVA shows you what matters today: your metabolic state, the strongest risk, your next action, what to scan, and which pattern has changed. Stop guessing. Get one clear next step."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6"
          >
            <p className="mb-1 text-xs uppercase tracking-wider text-text-muted">Today</p>
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-text-secondary">Metabolic Readiness</p>
                <p className="text-4xl font-bold text-[#4CAF7D]">
                  {decisionCockpitDemo.readiness}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-text-muted">Decision Grade</p>
                <p className="text-3xl font-bold text-[#c9a84c]">{decisionCockpitDemo.grade}</p>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-text-secondary">
              {decisionCockpitDemo.summary}
            </p>
            <ul className="space-y-2">
              {decisionCockpitDemo.checklist.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-text-secondary">
                  <span className="text-[#4CAF7D]">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="rounded-2xl border border-[rgba(201,168,76,0.2)] bg-[#0d0d0d] p-6"
          >
            <p className="mb-4 text-sm font-bold text-[#c9a84c]">REVA Decision Standard</p>
            <ol className="space-y-3">
              {decisionCockpitDemo.revaStandard.map((line, i) => (
                <li key={line} className="text-sm text-text-secondary">
                  <span className="font-bold text-text-primary">{i + 1}.</span> {line}
                </li>
              ))}
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/reva" className="btn-gold text-sm">
                Run REVA Example
              </a>
              <a href="#waitlist" className="btn-ghost text-sm">
                Join the Private Beta
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
