import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, PageIntro, Section } from "@/components/site/ui";
import { journeyMarkersAfter, journeyMarkersBefore } from "@/lib/marketing-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About & Evidence | MetaboliQ OS",
  description:
    "Our mission, the founder’s journey and how we show the basis and the limits of what MetaboliQ OS says.",
  path: "/about",
});

export default function AboutPage() {
  // One founder evidence dataset, referenced here only (§13 content management).
  const markers = journeyMarkersBefore.map((b, i) => ({ label: b.label, before: b.value, after: journeyMarkersAfter[i]?.value ?? "—" }));

  return (
    <>
      <div id="mission" className="scroll-mt-24">
        <PageIntro eyebrow="Our mission" title="A New Era of Longevity and Wellness.">
          <p>
            We exist to make personalised wellness easier to understand and act on. Your body is unique. Your daily plan
            should take account of that.
          </p>
          <p>
            Our mission is to bring scattered information into one useful picture: food, movement, sleep, stress, health
            markers and the context behind them. Help people understand the choices available, reduce guesswork and
            focus on actions they can follow through on.
          </p>
          <p>
            We start with daily habits and informed choices. Medication and treatment decisions remain with qualified
            clinicians. Personalisation should support appropriate care.
          </p>
        </PageIntro>
      </div>

      <Section id="founder-journey" tone="alt" eyebrow="Founder’s journey" title="I Wanted Answers I Could Use.">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4 leading-relaxed text-text-secondary">
            <p>
              I had health data, advice and plenty of things I could try. What I needed was a way to connect it all. I
              started measuring my food responses, glucose, blood pressure, blood markers, body composition, sleep,
              stress and movement.
            </p>
            <p>
              More than 3,000 personal experiments helped shape my understanding. I recorded what I did and what changed.
              Those observations became part of the thinking behind MetaboliQ OS and the MRRRU framework.
            </p>
            <p>
              My experience is one person’s journey. It is why I built the platform. It does not mean everyone will get
              the same result.
            </p>
            <blockquote className="rounded-2xl border-l-[3px] border-[var(--gold-ink)] bg-[var(--surface-2)] px-5 py-4">
              <p className="text-2xl italic text-text-primary" style={{ fontFamily: "var(--font-head)" }}>
                “Verified data is sovereignty.”
              </p>
              <footer className="mt-2 text-sm text-text-muted">Mru Patel, Founder &amp; CEO</footer>
            </blockquote>
          </div>
          <figure className="mx-auto w-full max-w-[380px] self-start">
            <div className="overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-black">
              <Image
                src="/images/founder-july-december-2025.png"
                alt="Mru Patel — July 2025 and December 2025, side by side"
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 90vw, 380px"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="mt-2 text-xs text-text-muted">July 2025 → December 2025 · founder’s own records</figcaption>
          </figure>
        </div>

        {/* Dated founder records, labelled as one person's case study. */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface-2)]">
          <table className="w-full text-left text-sm">
            <caption className="border-b border-[var(--line)] px-4 py-3 text-left text-xs text-text-muted">
              Founder’s personal records, July 2025 and December 2025. One person’s case study — not a clinical trial,
              not medical advice.
            </caption>
            <thead>
              <tr className="text-[0.72rem] uppercase tracking-wider text-text-muted">
                <th scope="col" className="px-4 py-3 font-semibold">Marker</th>
                <th scope="col" className="px-4 py-3 font-semibold">July 2025</th>
                <th scope="col" className="px-4 py-3 font-semibold">Dec 2025</th>
              </tr>
            </thead>
            <tbody>
              {markers.map((m) => (
                <tr key={m.label} className="border-t border-[var(--line)]">
                  <th scope="row" className="px-4 py-3 font-medium text-text-secondary">
                    {m.label}
                  </th>
                  <td className="px-4 py-3 tabular-nums text-text-primary">{m.before}</td>
                  <td className="px-4 py-3 font-semibold tabular-nums text-text-primary">{m.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="evidence" eyebrow="Evidence" title="Show the Basis. Show the Limits.">
        <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
          <p>
            We distinguish personal observations, published research and product design. Our founder’s records provide a
            personal case study. Research informs the rules and explanations. Neither should be presented as a guarantee
            of your results.
          </p>
          <p>
            Where a claim is supported, show the source and context. Where information is missing or uncertain, say so.
            That is how trust should be built.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { t: "Personal observations", d: "The founder’s own records — a case study." },
            { t: "Published research", d: "Informs the rules and explanations." },
            { t: "Product design", d: "How the platform turns information into actions." },
          ].map((x) => (
            <li key={x.t} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5">
              <p className="font-semibold text-text-primary">{x.t}</p>
              <p className="mt-1 text-sm text-text-muted">{x.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="future" tone="alt" eyebrow="Future" title="Future">
        <p className="max-w-3xl leading-relaxed text-text-secondary">
          We are developing the platform in stages: individuals first, professional partners next, then corporate and
          insurance pathways. Each stage will be described according to what is actually available.
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            { s: "Now", t: "Individuals" },
            { s: "Next", t: "Professional partners" },
            { s: "Later", t: "Corporate and insurance pathways" },
          ].map((x) => (
            <li key={x.t} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[var(--gold-ink)]">{x.s}</p>
              <p className="mt-1 text-lg font-semibold text-text-primary">{x.t}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand title="Discover your metabolism. Personalise your actions. Measure what changes." />
    </>
  );
}
