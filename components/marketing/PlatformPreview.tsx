"use client";

import { motion } from "framer-motion";

const cockpitStats = [
  { label: "Glucose", value: "6.2", sub: "mmol/L stable", accent: "#4CAF7D" },
  { label: "Recovery", value: "78", sub: "sleep + HRV", accent: "#C9A84C" },
  { label: "Stress Load", value: "32", sub: "low · wearable", accent: "#4A9EE8" },
  { label: "Steps", value: "9.4k", sub: "today · sync", accent: "#E8973A" },
  { label: "Sleep Duration", value: "7 hrs", sub: "last night", accent: "#C9A84C" },
  { label: "BP", value: "128/81", sub: "59 bpm pulse", accent: "#4CAF7D" },
  { label: "Glucose 2hr Log", value: "6.1", sub: "CGM or add manually", accent: "#4CAF7D" },
  { label: "Glucose 3hr Log", value: "5.9", sub: "CGM or add manually", accent: "#4CAF7D" },
];

function CgmSparkline() {
  return (
    <div className="relative h-[72px] overflow-hidden rounded-lg border border-[rgba(201,168,76,0.12)] bg-[#0a0a0a]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(224,82,82,0.12) 0%, rgba(76,175,125,0.18) 100%)",
        }}
      />
      <svg viewBox="0 0 280 72" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
        <path
          d="M0 48 Q35 44 70 38 T140 34 T210 30 T280 26"
          fill="none"
          stroke="#4CAF7D"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute right-2 top-1.5 text-[0.55rem] font-bold uppercase tracking-wider text-[#4CAF7D]">
        CGM · 6h
      </span>
    </div>
  );
}

function CockpitScreenshotVisual() {
  const highlightMetrics = [
    { label: "Sleep", value: "7 hrs", tone: "#C9A84C" },
    { label: "BP", value: "128/81", sub: "59 bpm", tone: "#4CAF7D" },
    { label: "Glucose", value: "6.2", sub: "mmol/L", tone: "#4CAF7D" },
    { label: "Recovery", value: "78", sub: "score", tone: "#C9A84C" },
  ];

  const glucoseLogs = [
    { window: "2hr post-meal", value: "6.1 mmol/L", synced: true },
    { window: "3hr post-meal", value: "5.9 mmol/L", synced: false },
  ];

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-3 flex w-full max-w-[360px] items-center justify-between gap-2 px-1">
        <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-text-muted">
          Alpha app · cockpit preview
        </p>
        <span className="badge badge-green shrink-0 text-[0.6rem]">Screenshot</span>
      </div>

      <div className="w-full max-w-[360px] rounded-[28px] border border-[rgba(201,168,76,0.35)] bg-[#050505] p-2.5 shadow-[0_20px_56px_rgba(0,0,0,0.55),0_0_40px_rgba(201,168,76,0.08)]">
        <div className="rounded-[22px] bg-gradient-to-b from-[#161616] to-[#080808] p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-1.5 w-10 rounded-full bg-[#2a2a2a]" />
            <span className="text-[0.58rem] font-bold uppercase tracking-wider text-[#c9a84c]">
              Today&apos;s Cockpit
            </span>
            <div className="h-2 w-2 rounded-full bg-[#4CAF7D]" aria-hidden />
          </div>

          <p className="mb-3 text-[0.65rem] text-text-muted">Demo · sync wearables · log glucose</p>

          <div className="mb-3 grid grid-cols-2 gap-2">
            {highlightMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl bg-[#0d0d0d] px-2.5 py-2 ring-1 ring-[rgba(201,168,76,0.1)]"
              >
                <p className="text-[0.52rem] font-bold uppercase tracking-wider text-text-muted">
                  {m.label}
                </p>
                <p
                  className="mt-0.5 text-lg font-bold leading-none"
                  style={{ fontFamily: "var(--font-head)", color: m.tone }}
                >
                  {m.value}
                </p>
                {m.sub ? (
                  <p className="mt-0.5 text-[0.52rem] text-text-muted">{m.sub}</p>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mb-1.5 text-[0.55rem] font-bold uppercase tracking-wider text-text-muted">
            CGM curve
          </p>
          <CgmSparkline />

          <p className="mb-2 mt-3 text-[0.55rem] font-bold uppercase tracking-wider text-text-muted">
            Post-meal glucose logs
          </p>
          <div className="space-y-2">
            {glucoseLogs.map((log) => (
              <div
                key={log.window}
                className="rounded-xl bg-[#0d0d0d] px-3 py-2.5 ring-1 ring-[rgba(255,255,255,0.04)]"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-wider text-text-muted">
                      {log.window}
                    </p>
                    <p
                      className="mt-0.5 text-base font-bold text-text-primary"
                      style={{ fontFamily: "var(--font-head)" }}
                    >
                      {log.value}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-1">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.5rem] font-bold uppercase ${
                        log.synced
                          ? "border border-[rgba(76,175,125,0.35)] bg-[rgba(76,175,125,0.12)] text-[#4CAF7D]"
                          : "border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c]"
                      }`}
                    >
                      {log.synced ? "CGM" : "Manual"}
                    </span>
                    {!log.synced ? (
                      <span className="text-center text-[0.48rem] text-text-muted">or add</span>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-l-[3px] border-[rgba(201,168,76,0.15)] border-l-[#c9a84c] bg-[rgba(0,0,0,0.35)] px-3 py-2.5">
            <p className="text-[0.55rem] font-bold uppercase tracking-wider text-[#c9a84c]">
              REVA
            </p>
            <p className="mt-1 text-[0.72rem] leading-relaxed text-text-secondary">
              Log 2hr &amp; 3hr glucose after meals — CGM when connected, manual when not.
            </p>
          </div>
        </div>
      </div>

      <p className="mt-3 max-w-[360px] text-center text-[0.62rem] leading-relaxed text-text-muted">
        Cockpit UI preview · Sleep, BP, CGM curve, and timed glucose logs in one daily view.
      </p>
    </div>
  );
}

export function PlatformPreview() {
  return (
    <section
      id="demo-platform"
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
            <p className="text-[0.98rem] leading-relaxed text-text-secondary md:text-base">
              Capture signals, ask REVA, receive decisions, update memory — the product layer I
              use daily. Currently in alpha build.
            </p>
          </div>

          <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
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
                  <p className="mt-1 text-xs text-text-muted">
                    Demo · Phase 3 · Food Intelligence &amp; CGM
                  </p>
                </div>
                <span className="badge badge-green shrink-0">Live Alpha UI</span>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {cockpitStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl bg-[#0d0d0d] px-2 py-2.5 text-center ring-1 ring-[rgba(201,168,76,0.1)] sm:py-3"
                  >
                    <p className="text-[0.52rem] font-bold uppercase leading-tight tracking-wider text-text-muted sm:text-[0.58rem]">
                      {stat.label}
                    </p>
                    <p
                      className="mt-1 text-[clamp(1rem,2.8vw,1.5rem)] font-bold leading-none"
                      style={{ fontFamily: "var(--font-head)", color: stat.accent }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.52rem] leading-tight text-text-muted sm:text-[0.58rem]">
                      {stat.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-4 flex-1 rounded-xl bg-[rgba(201,168,76,0.04)] p-4 ring-1 ring-[rgba(201,168,76,0.12)]">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[#c9a84c]">
                  REVA · next best action
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  Sleep logged at <strong className="text-text-primary">7 hrs</strong>. BP{" "}
                  <strong className="text-text-primary">128/81</strong> · pulse{" "}
                  <strong className="text-text-primary">59 bpm</strong>. Log 2hr and 3hr
                  glucose after meals — CGM when connected, or add manually.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Log 2hr glucose", "Log 3hr glucose", "Sync wearables", "Ask REVA"].map(
                  (action) => (
                    <span
                      key={action}
                      className="rounded-full border border-[rgba(201,168,76,0.2)] bg-[#0d0d0d] px-3 py-1.5 text-xs text-text-secondary"
                    >
                      {action}
                    </span>
                  ),
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 }}
              className="flex min-h-full items-center"
            >
              <CockpitScreenshotVisual />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
