import type { Metadata } from "next";
import { CtaBand, ExampleTag, PageIntro, Section } from "@/components/site/ui";
import { foodOsMealPreview } from "@/lib/marketing-content";
import { startJourneyHref } from "@/lib/nav";
import { createPageMetadata } from "@/lib/seo";
import { foodOsCounts } from "@/lib/v1-content";

export const metadata: Metadata = createPageMetadata({
  title: "Food OS & MCSI | MetaboliQ OS",
  description:
    "Food decisions built around you: 70,000+ recipes, 10 food categories and 130+ personalisation tags, with MetaboliQ Cooking State Intelligence™.",
  path: "/food-os",
});

const factors = ["How it is cooked", "What it is paired with", "How much you eat", "When you eat it", "Your sleep and activity that day"];

const howToUse = [
  "Start with your preferences and goals.",
  "Explore a suitable meal.",
  "Review suggested adjustments to preparation, portions or sequencing.",
  "Record your response where relevant, so the next decision can draw on what you observed.",
];

export default function FoodOsPage() {
  return (
    <>
      <div id="what-it-is" className="scroll-mt-24">
        <PageIntro
          eyebrow="Food OS"
          title="Food Decisions Built Around You."
          primary={{ label: "Start My Journey", href: startJourneyHref }}
          secondary={{ label: "Learn About Nutrition + MCSI", href: "/learn?category=nutrition-mcsi" }}
          aside={
            <dl className="grid grid-cols-3 gap-3 text-center">
              {[
                { v: foodOsCounts.recipes, l: "recipes" },
                { v: foodOsCounts.categories, l: "food categories" },
                { v: foodOsCounts.tags, l: "personalisation tags" },
              ].map((c) => (
                <div key={c.l} className="rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] px-2 py-5">
                  <dt className="sr-only">{c.l}</dt>
                  <dd>
                    <span className="gold-text block text-[clamp(1.5rem,5vw,2.4rem)] font-semibold leading-none">{c.v}</span>
                    <span className="mt-2 block text-[0.68rem] font-semibold uppercase tracking-wider text-text-muted">
                      {c.l}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          }
        >
          <p>
            Food OS brings together 70,000+ recipes, 10 food categories and 130+ personalisation tags. Your goals,
            preferences and available health information help narrow the choices. The aim is to make food work in your
            daily life, with practical decisions about ingredients, preparation, portions, timing and eating order.
          </p>
        </PageIntro>
      </div>

      <Section id="personalisation" tone="alt" eyebrow="Why personalisation matters" title="The Same Meal Does Not Tell the Whole Story.">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="space-y-4 leading-relaxed text-text-secondary">
            <p>
              An ingredient is only the starting point. How it is cooked, what it is paired with, how much you eat and
              when you eat it can all matter. So can your sleep, activity and metabolic context that day. Food OS is
              designed to consider these factors together.
            </p>
            <p>
              You should still enjoy your food. The goal is to understand your choices and make adjustments that fit
              your body, culture and routine.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-5">
            <p className="text-sm font-semibold text-text-primary">One ingredient, many contexts</p>
            <ul className="mt-3 space-y-2">
              {factors.map((f) => (
                <li key={f} className="flex items-center gap-3 rounded-xl bg-[var(--gold-wash)] px-3 py-2.5 text-sm text-text-secondary">
                  <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-[var(--gold-ink)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="mcsi" eyebrow="MCSI" title="MetaboliQ Cooking State Intelligence™">
        <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
          <p>
            MCSI looks beyond the name of an ingredient. It considers the cooking method, preparation conditions, cooling
            and reheating, portions and food pairings, alongside relevant personal context.
          </p>
          <p>
            It is designed to connect food preparation with better-informed daily decisions. Nutrient estimates and
            individual responses carry uncertainty. A glucose reading alone cannot tell us how much of every nutrient
            the body absorbed.
          </p>
        </div>
      </Section>

      <Section id="how-to-use" tone="alt" eyebrow="How to use it" title="How to Use It">
        <div className="grid gap-8 lg:grid-cols-2">
          <ol className="space-y-3">
            {howToUse.map((s, i) => (
              <li key={s} className="flex gap-4 rounded-2xl border border-[var(--line)] bg-[var(--surface-2)] p-4">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--gold-wash)] text-sm font-bold text-[var(--gold-ink)]">
                  {i + 1}
                </span>
                <span className="pt-1 leading-relaxed text-text-secondary">{s}</span>
              </li>
            ))}
          </ol>

          {/* One recipe example, clearly labelled — no personal score for an anonymous visitor (§6). */}
          <article className="rounded-2xl border border-[var(--line-strong)] bg-[var(--surface-2)] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <ExampleTag />
              <span className="text-xs text-text-muted">Sample recipe</span>
            </div>
            <h3 className="mt-3 text-[1.4rem] font-semibold leading-snug text-text-primary">{foodOsMealPreview.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-text-secondary">{foodOsMealPreview.description}</p>
            <p className="mt-3 rounded-xl bg-[var(--gold-wash)] p-3 text-sm leading-relaxed text-text-secondary">
              {foodOsMealPreview.nutrition}
            </p>
          </article>
        </div>
      </Section>

      <CtaBand
        title="Food decisions built around you."
        secondary={{ label: "Learn About Nutrition + MCSI", href: "/learn?category=nutrition-mcsi" }}
      />
    </>
  );
}
