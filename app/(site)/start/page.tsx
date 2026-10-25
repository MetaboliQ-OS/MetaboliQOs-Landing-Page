import type { Metadata } from "next";
import { StartJourney } from "@/components/site/StartJourney";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Start My Journey — Find My Starting Point | MetaboliQ OS",
  description: "Tell us what you want to improve and how you live today. We will suggest where to begin.",
  path: "/start",
});

export default function StartPage() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(201,168,76,0.08) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="container-main relative py-12 md:py-20">
        <StartJourney />
      </div>
    </section>
  );
}
