"use client";

import { motion } from "framer-motion";

const kpis = [
  { label: "Glucose", value: "6.2", sub: "mmol/L stable", accent: "#4CAF7D" },
  { label: "Recovery", value: "78", sub: "sleep + HRV", accent: "#C9A84C" },
  { label: "Phase", value: "3", sub: "of 6 active", accent: "#4A9EE8" },
];

const signals = [
  { icon: "🍽️", label: "FoodOS Scan", status: "Impact A−", tone: "green" },
  { icon: "⌚", label: "Wearable Sync", status: "Connected", tone: "gold" },
  { icon: "🫀", label: "FaceScan Signal", status: "Ready", tone: "gold" },
];

function MiniCgmSparkline() {
  return (
    <div className="relative h-16 overflow-hidden rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0a0a0a]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(224,82,82,0.15) 0%, rgba(76,175,125,0.2) 100%)",
        }}
      />
      <svg viewBox="0 0 240 64" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0 42 Q30 38 50 32 T100 28 T150 30 T200 26 T240 24"
          fill="none"
          stroke="#4CAF7D"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="5 3"
        />
      </svg>
      <span className="absolute right-2 top-1.5 text-[0.55rem] font-bold uppercase tracking-wider text-[#4CAF7D]">
        Stable
      </span>
    </div>
  );
}

export function PlatformPreview() {
  return (
    <section
      id="platform"
      className="py-14 md:py-16"
      style={{ background: "linear-gradient(180deg, #0d0d0d, #080808)" }}
    >
      <div className="container-main">
        <div className="glass overflow-hidden rounded-3xl border border-[rgba(201,168,76,0.2)] p-6 md:p-8 lg:p-10">
          <div className="mb-8 max-w-3xl">
            <span className="badge badge-gold mb-3">Alpha Platform</span>
            <h2 className="gold-text text-[clamp(1.9rem,4vw,2.75rem)] italic leading-tight">
              MetaboliQ OS App Cockpit
            </h2>
            <div className="gold-line" />
            <p className="text-[0.98rem] leading-relaxed text-[#c8bfa8] md:text-base">
              Capture signals, ask REVA, receive decisions, update memory — the product layer I
              use daily. Currently in alpha build.
            </p>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
            {/* Cockpit dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#111111] p-5 md:p-6"
            >
              <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-[rgba(201,168,76,0.1)] pb-4">
                <div>
                  <h3
                    className="text-xl text-[#c9a84c] md:text-2xl"
                    style={{ fontFamily: "var(--font-head)" }}
                  >
                    Today&apos;s Metabolic Cockpit
                  </h3>
                  <p className="mt-1 text-xs text-[#7a7060]">
                    Demo · Phase 3 · Food Intelligence & CGM
                  </p>
                </div>
                <span className="badge badge-green shrink-0">Live Alpha UI</span>
              </div>

              <div className="mb-4 grid grid-cols-3 gap-2.5">
                {kpis.map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl bg-[#0d0d0d] px-2 py-3 text-center ring-1 ring-[rgba(201,168,76,0.1)]"
                  >
                    <p className="text-[0.58rem] font-bold uppercase tracking-wider text-[#7a7060]">
                      {kpi.label}
                    </p>
                    <p
                      className="mt-1 text-2xl font-bold leading-none"
                      style={{ fontFamily: "var(--font-head)", color: kpi.accent }}
                    >
                      {kpi.value}
                    </p>
                    <p className="mt-1 text-[0.58rem] text-[#7a7060]">{kpi.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mb-4 flex-1 rounded-xl bg-[rgba(201,168,76,0.04)] p-4 ring-1 ring-[rgba(201,168,76,0.12)]">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#c9a84c]">
                  REVA · next best action
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#c8bfa8]">
                  Eat protein and greens first, starch last. 12-minute post-meal walk. Log 1h
                  glucose if using CGM.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Scan meal", "Sync wearables", "Ask REVA"].map((action) => (
                  <span
                    key={action}
                    className="rounded-full border border-[rgba(201,168,76,0.2)] bg-[#0d0d0d] px-3 py-1.5 text-xs text-[#c8bfa8]"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Phone / signal capture preview */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-[340px] rounded-[26px] border border-[rgba(201,168,76,0.3)] bg-[#050505] p-2.5 shadow-[0_16px_48px_rgba(0,0,0,0.5)]">
                <div className="rounded-[20px] bg-gradient-to-b from-[#141414] to-[#080808] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="h-1.5 w-12 rounded-full bg-[#2a2a2a]" />
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#7a7060]">
                      Signal capture
                    </span>
                  </div>

                  <div className="mb-3 overflow-hidden rounded-xl border border-[rgba(201,168,76,0.12)]">
                    <div className="meal-visual h-28 w-full" />
                    <div className="flex items-center justify-between bg-[#0d0d0d] px-3 py-2">
                      <span className="text-xs text-[#c8bfa8]">Lunch scan</span>
                      <span className="rounded-full border border-[rgba(76,175,125,0.35)] bg-[rgba(76,175,125,0.1)] px-2 py-0.5 text-[0.6rem] font-bold text-[#4CAF7D]">
                        A−
                      </span>
                    </div>
                  </div>

                  <p className="mb-1.5 text-[0.58rem] font-bold uppercase tracking-wider text-[#7a7060]">
                    CGM · 6h view
                  </p>
                  <MiniCgmSparkline />

                  <div className="mt-3 space-y-2">
                    {signals.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-lg bg-[#0d0d0d] px-3 py-2.5 ring-1 ring-[rgba(255,255,255,0.04)]"
                      >
                        <span className="flex items-center gap-2 text-sm text-[#f5f0e8]">
                          <span className="text-base">{item.icon}</span>
                          {item.label}
                        </span>
                        <span
                          className={`text-[0.62rem] font-bold uppercase tracking-wide ${
                            item.tone === "green" ? "text-[#4CAF7D]" : "text-[#c9a84c]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
