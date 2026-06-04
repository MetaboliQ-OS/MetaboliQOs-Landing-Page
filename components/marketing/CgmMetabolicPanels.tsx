"use client";

function CgmCurve() {
  return (
    <div className="relative mt-3 h-28 overflow-hidden rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#0a0a0a]">
      {/* zone bands */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(90deg, rgba(224,82,82,0.22) 0%, rgba(232,151,58,0.12) 35%, rgba(76,175,125,0.18) 70%, rgba(76,175,125,0.28) 100%)",
        }}
      />
      {/* grid lines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 17px, rgba(255,255,255,0.06) 18px)",
        }}
      />
      <svg
        viewBox="0 0 320 112"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="cgmLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E05252" />
            <stop offset="35%" stopColor="#E8973A" />
            <stop offset="65%" stopColor="#4CAF7D" />
            <stop offset="100%" stopColor="#7dcea0" />
          </linearGradient>
        </defs>
        {/* downward trend: early spike → deep trough → lower rebound → settles down (not lifted at end) */}
        <path
          d="M 0 54 C 32 22, 58 20, 90 28 S 120 78, 152 72 S 192 46, 232 48 S 272 58, 320 64"
          fill="none"
          stroke="url(#cgmLine)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="7 5"
          filter="drop-shadow(0 0 6px rgba(76,175,125,0.55))"
        />
        <path
          d="M 0 54 C 32 22, 58 20, 90 28 S 120 78, 152 72 S 192 46, 232 48 S 272 58, 320 64"
          fill="none"
          stroke="rgba(125,206,160,0.5)"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.35"
        />
        <circle cx="320" cy="64" r="4.5" fill="#7dcea0" opacity="0.95" />
      </svg>
    </div>
  );
}

export function CgmMetabolicPanels() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {/* Baseline — home glucose */}
      <div className="glass rounded-2xl p-4">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-text-muted">
          Home glucose test · baseline moment
        </p>
        <div className="mt-3 rounded-xl border-2 border-[rgba(255,255,255,0.08)] bg-[#101010] p-4 shadow-[inset_0_0_0_1px_rgba(201,168,76,0.08)]">
          <div className="rounded-lg bg-gradient-to-b from-[#dbe8d4] to-[#b8cab0] px-4 py-5 text-center text-[#101510]">
            <p className="text-[0.65rem] font-bold uppercase tracking-widest opacity-70">
              Blood glucose
            </p>
            <p
              className="text-5xl font-bold leading-none text-[#E05252]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              11.3
            </p>
            <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-widest opacity-75">
              mmol/L
            </p>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-[rgba(201,168,76,0.14)] bg-[rgba(0,0,0,0.25)] p-2.5 text-center">
            <b className="block text-lg text-[#E05252]" style={{ fontFamily: "var(--font-head)" }}>
              8.3%
            </b>
            <span className="text-[0.58rem] uppercase tracking-wider text-text-muted">HbA1c start</span>
          </div>
          <div className="rounded-xl border border-[rgba(201,168,76,0.14)] bg-[rgba(0,0,0,0.25)] p-2.5 text-center">
            <b className="block text-lg text-[#E05252]" style={{ fontFamily: "var(--font-head)" }}>
              212/109
            </b>
            <span className="text-[0.58rem] uppercase tracking-wider text-text-muted">BP spike</span>
          </div>
        </div>
      </div>

      {/* Rebuilt — CGM response */}
      <div className="glass rounded-2xl p-4">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-text-muted">
          CGM / metabolic response view · rebuilt
        </p>
        <div className="mt-3 rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#111] p-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.62rem] uppercase tracking-widest text-text-muted">
              Current trend
            </span>
            <span className="badge badge-green text-[0.6rem]">Stable</span>
          </div>
          <p
            className="mt-1 text-4xl font-bold leading-none text-[#4CAF7D]"
            style={{ fontFamily: "var(--font-head)" }}
          >
            5.3
          </p>
          <p className="text-[0.65rem] text-text-muted">mmol/L demo reading</p>
          <CgmCurve />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-[rgba(201,168,76,0.14)] bg-[rgba(0,0,0,0.25)] p-2.5 text-center">
            <b className="block text-lg text-[#4CAF7D]" style={{ fontFamily: "var(--font-head)" }}>
              5.3%
            </b>
            <span className="text-[0.58rem] uppercase tracking-wider text-text-muted">HbA1c after</span>
          </div>
          <div className="rounded-xl border border-[rgba(201,168,76,0.14)] bg-[rgba(0,0,0,0.25)] p-2.5 text-center">
            <b className="block text-lg text-[#4CAF7D]" style={{ fontFamily: "var(--font-head)" }}>
              124/80
            </b>
            <span className="text-[0.58rem] uppercase tracking-wider text-text-muted">BP after</span>
          </div>
        </div>
      </div>
    </div>
  );
}
