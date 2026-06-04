export function FounderQuoteSection() {
  return (
    <section
      id="founder-quote"
      className="border-t border-[rgba(201,168,76,0.12)] py-20 text-center"
      style={{ background: "#080808" }}
    >
      <div className="container-main mx-auto max-w-[800px]">
        <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-[#c9a84c]">
          Founder — 2015
        </p>
        <blockquote className="gold-text mb-4 text-[clamp(2rem,5vw,3.8rem)] font-black italic leading-[1.15]">
          &ldquo;Verified Data
          <br />
          is Sovereignty.&rdquo;
        </blockquote>
        <p className="text-base leading-relaxed text-text-secondary">
          Tested on the founder as a guinea pig. Verified from hundreds of independent data sources
          across global metabolic, longevity and clinical research. Built into MRRRU. Now available
          to everyone.
        </p>
        <p className="mt-6 text-[0.85rem] text-text-muted">
          — Mru Patel · MetaboliQ OS · Founder
        </p>
      </div>
    </section>
  );
}
