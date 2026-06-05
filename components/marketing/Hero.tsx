import { HeroAnimatedCopy } from "./HeroAnimatedCopy";
import { HeroPortrait } from "./HeroPortrait";
import { HeroStats } from "./HeroStats";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      style={{ background: "#000" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.07) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10 grid gap-8 py-16 md:py-20 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center lg:gap-6 xl:gap-10">
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.07)] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#c9a84c]"
              style={{ fontFamily: "var(--font-condensed)" }}
            >
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-[#4CAF7D]" />
              Personally Proven · Built In Public
            </div>
            <span className="badge badge-green">Phase 3 of 6 · Active Journey</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="badge badge-gold">Personally Proven · No GLP-1 · No Shortcuts</span>
            <span className="badge badge-amber">
              1,500+ Experiments &amp; Case Studies · MRRRU Journal
            </span>
            <span className="badge badge-green">Zero Paid Sponsors</span>
          </div>

          <h1 className="mb-6 text-[clamp(2.4rem,6vw,4.8rem)] leading-[1.05]">
            <span className="block">Your Metabolic</span>
            <span className="gold-text block">Operating System</span>
            <span className="mt-2 block text-[0.55em] italic text-text-secondary">
              Built from My Real Data
            </span>
          </h1>

          <div className="mb-6 flex justify-center lg:hidden">
            <HeroPortrait className="w-[min(78vw,320px)]" />
          </div>

          <HeroAnimatedCopy />
        </div>

        <div className="hidden shrink-0 self-center justify-self-center lg:flex lg:justify-center">
          <HeroPortrait className="w-[300px] xl:w-[360px]" />
        </div>

        <HeroStats />
      </div>
    </section>
  );
}
