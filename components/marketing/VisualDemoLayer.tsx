"use client";

import { motion } from "framer-motion";
import {
  visualDemoFoodResult,
  visualDemoWearableStats,
} from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function VisualDemoLayer() {
  return (
    <section
      id="visual-demo-layer"
      className="section-pad border-y border-[rgba(201,168,76,0.12)]"
      style={{
        background: "linear-gradient(180deg, #080808, #0d0d0d)",
      }}
    >
      <div className="container-main">
        <SectionHeading
          badge="v7.4 · Visual Demo Layer"
          title="Capture Signals. See the Decision."
          subtitle="Visual examples for scanning a meal, syncing wearable data and running a FaceScan. Live hardware integrations require native app/API permissions; this marketing layer uses realistic demo simulations so every flow is visible offline."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass card-hover rounded-2xl p-6"
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">
              FoodOS Scan — Example Result
            </p>
            <p className="mb-4 text-sm text-text-secondary">
              Photo, label, voice or menu input becomes a metabolic meal decision.
            </p>
            <div className="mb-4 flex items-center justify-between gap-3">
              <span className="text-sm text-text-muted">Impact Score</span>
              <span className="rounded-lg bg-[rgba(76,175,125,0.15)] px-3 py-1 text-lg font-bold text-[#4CAF7D]">
                {visualDemoFoodResult.impact}
              </span>
            </div>
            <div className="meal-visual mb-4 h-32 rounded-xl border border-[rgba(201,168,76,0.15)]" />
            <h3 className="mb-3 font-semibold text-[#c9a84c]">{visualDemoFoodResult.title}</h3>
            <div className="mb-4 flex flex-wrap gap-2">
              {[
                { k: visualDemoFoodResult.protein, l: "Protein" },
                { k: visualDemoFoodResult.giRisk, l: "GI risk" },
                { k: visualDemoFoodResult.walk, l: "Walk" },
              ].map((chip) => (
                <span
                  key={chip.l}
                  className="rounded-full border border-[rgba(201,168,76,0.2)] bg-[#111] px-3 py-1 text-xs text-text-secondary"
                >
                  <span className="font-bold text-[#c9a84c]">{chip.k}</span> {chip.l}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-text-secondary">
              REVA output: {visualDemoFoodResult.revaOutput}
            </p>
            <a href="#food-os" className="btn-gold mt-5 inline-flex text-sm">
              Run FoodOS Scan Demo
            </a>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="glass card-hover rounded-2xl p-6"
          >
            <p className="mb-1 text-xs font-bold uppercase tracking-wider text-text-muted">
              Face & Retina Scan + Wearables
            </p>
            <p className="mb-4 text-sm text-text-secondary">
              Camera wellness estimates and device signals flow into the same decision cockpit.
            </p>
            <div className="mb-4 grid grid-cols-2 gap-3">
              {visualDemoWearableStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#111] p-3"
                >
                  <div className="text-[0.65rem] uppercase tracking-wider text-text-muted">
                    {s.label}
                  </div>
                  <div className="text-lg font-bold text-[#c9a84c]">{s.value}</div>
                  <div className="text-[0.72rem] text-text-muted">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#face-scan" className="btn-gold text-sm">
                Start Face + Retina Demo
              </a>
              <a href="#wearables" className="btn-ghost text-sm">
                Simulate Device Sync
              </a>
            </div>
          </motion.article>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#demo-platform" className="btn-gold text-sm">
            Open Demo Platform UI
          </a>
          <a href="#phases" className="btn-ghost text-sm">
            Find My MRRRU Phase
          </a>
        </div>
      </div>
    </section>
  );
}
