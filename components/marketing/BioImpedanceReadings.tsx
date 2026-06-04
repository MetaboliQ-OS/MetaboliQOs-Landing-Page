"use client";

const biaReadings = [
  { label: "Weight", before: "83 kg", after: "69 kg", delta: "−17%" },
  { label: "Body fat", before: "21.0%", after: "15.2%", delta: "−28%" },
  { label: "Visceral fat", before: "15–16", after: "11", delta: "−25%" },
  { label: "BMI", before: "27.2", after: "20.5", delta: "−25%" },
  { label: "Waist (naval)", before: "115 cm", after: "93 cm", delta: "−19%" },
  { label: "Muscle mass", before: "56.1 kg", after: "54.3 kg", delta: "Maintained" },
  { label: "Body moisture", before: "52.4%", after: "56.9%", delta: "+9%" },
];

export function BioImpedanceReadings() {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span className="badge badge-gold">Bio-impedance scales</span>
        <span className="text-[0.62rem] uppercase tracking-wider text-text-muted">
          Smart scale · documented readings
        </span>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-text-secondary">
        Body composition tracked on bio-impedance scales — weight, fat, visceral score, muscle
        and hydration logged alongside CGM and labs.
      </p>
      <div className="overflow-hidden rounded-xl border border-[rgba(201,168,76,0.12)]">
        <div className="grid grid-cols-[1.2fr_1fr_1fr_0.7fr] gap-px bg-[rgba(201,168,76,0.1)] text-[0.58rem] font-bold uppercase tracking-wider text-text-muted">
          <div className="bg-[#0d0d0d] px-2.5 py-2">Metric</div>
          <div className="bg-[#0d0d0d] px-2 py-2 text-center">Before</div>
          <div className="bg-[#0d0d0d] px-2 py-2 text-center">After</div>
          <div className="bg-[#0d0d0d] px-2 py-2 text-center">Δ</div>
        </div>
        {biaReadings.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1.2fr_1fr_1fr_0.7fr] gap-px border-t border-[rgba(201,168,76,0.06)] text-[0.72rem] text-text-secondary"
          >
            <div className="bg-[#111111] px-2.5 py-2 font-medium text-text-primary">
              {row.label}
            </div>
            <div
              className="bg-[#111111] px-2 py-2 text-center font-semibold text-[#E05252]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              {row.before}
            </div>
            <div
              className="bg-[#111111] px-2 py-2 text-center font-semibold text-[#4CAF7D]"
              style={{ fontFamily: "var(--font-head)" }}
            >
              {row.after}
            </div>
            <div className="bg-[#111111] px-2 py-2 text-center text-[0.65rem] text-text-muted">
              {row.delta}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-[0.62rem] italic text-text-muted">
        Clinician-supervised personal data. Not medical advice.
      </p>
    </div>
  );
}
