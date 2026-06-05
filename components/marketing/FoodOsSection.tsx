"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  cuisineOptions,
  foodOsMealPreview,
  foodOsPhases,
  foodOsRecipeCategories,
  foodOsTabs,
  mealGoals,
} from "@/lib/marketing-content";
import { SectionHeading } from "./SectionHeading";

export function FoodOsSection() {
  const [tab, setTab] = useState<(typeof foodOsTabs)[number]["id"]>("configure");

  return (
    <section id="food-os" className="section-pad">
      <div className="container-main">
        <SectionHeading
          badge="Food Intelligence OS"
          title="Food OS: Turn Any Meal Into A Smarter Metabolic Decision"
          subtitle="Food is where most people win or lose their health every day. MetaboliQ Food OS helps you choose, adjust and sequence your meals based on your goals, glucose response, phase, culture and preferences. Take a photo. Scan a label. Type a meal. Choose your cuisine. Ask REVA what to do. REVA does not just count calories — it tells you what to eat first, what to reduce, what to pair, when to walk, and what to track after the meal. Built from my own food experiments, global cuisine research, and 800+ founder recipes across 90+ countries and 3 cookbooks."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {foodOsTabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                tab === t.id
                  ? "border-[#c9a84c] bg-gradient-to-br from-[#8b6914] to-[#c9a84c] text-[#0d0d0d]"
                  : "border-[rgba(201,168,76,0.18)] bg-transparent text-text-muted hover:text-text-secondary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "configure" && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-lg text-[#c9a84c]">Configure Your Metabolic Meal</h3>
              <label
                htmlFor="food-os-mrrru-phase"
                className="mb-1 block text-xs uppercase tracking-wider text-text-muted"
              >
                MRRRU Phase
              </label>
              <select
                id="food-os-mrrru-phase"
                className="mb-4 w-full rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2 text-sm text-text-secondary"
              >
                {foodOsPhases.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <p className="mb-2 text-xs text-text-muted">
                Meal Profile — multi-select; REVA combines all choices into one optimised recipe.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {mealGoals.map((g) => (
                  <span
                    key={g}
                    className="cursor-default rounded-full border border-[rgba(201,168,76,0.18)] px-3 py-1 text-xs text-text-secondary"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="mb-2 text-xs uppercase tracking-wider text-text-muted">
                Cuisine Preference
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {cuisineOptions.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[rgba(201,168,76,0.18)] px-2.5 py-1 text-xs text-text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <button type="button" className="btn-gold w-full justify-center text-sm">
                Generate Metabolic Meal Plan
              </button>
            </div>
            <m.article
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[rgba(201,168,76,0.25)] bg-[#141414] p-6"
            >
              <p className="mb-2 text-xs uppercase tracking-wider text-text-muted">
                Your Metabolic Meal Plan
              </p>
              <h4 className="mb-2 text-xl text-[#c9a84c]">{foodOsMealPreview.title}</h4>
              <p className="mb-4 text-sm text-text-secondary">{foodOsMealPreview.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  { v: foodOsMealPreview.protein, l: "Protein" },
                  { v: foodOsMealPreview.spike, l: "Spike risk" },
                  { v: foodOsMealPreview.walk, l: "Post walk" },
                ].map((c) => (
                  <span
                    key={c.l}
                    className="rounded-full border border-[rgba(76,175,125,0.3)] bg-[rgba(76,175,125,0.08)] px-3 py-1 text-xs"
                  >
                    <span className="font-bold text-[#4CAF7D]">{c.v}</span> {c.l}
                  </span>
                ))}
              </div>
              <p className="text-xs leading-relaxed text-text-muted">{foodOsMealPreview.nutrition}</p>
              <p className="mt-3 text-xs text-text-secondary">{foodOsMealPreview.sequence}</p>
            </m.article>
          </div>
        )}

        {tab === "photo" && (
          <UploadPanel
            title="Upload Food Photo"
            desc="Take a photo of any meal or dish. REVA will identify it, estimate calories, list ingredients, show how to prepare it, and tell you exactly how to modify it for your metabolic goals and health conditions."
            placeholder="Tap or drag to upload food photo — JPG, PNG, HEIC"
            cta="Analyse with REVA"
          />
        )}
        {tab === "barcode" && (
          <UploadPanel
            title="Barcode / Nutrition Label Scan"
            desc="Photograph a product barcode or nutrition label. REVA will decode the metabolic profile — glucose risk, insulin load, ingredient safety and MRRRU phase alignment."
            placeholder="Tap to photograph barcode or nutrition label"
            cta="Analyse Product"
          />
        )}
        {tab === "menu" && (
          <UploadPanel
            title="Restaurant Menu Intelligence"
            desc="Photograph a restaurant menu or paste its items. REVA ranks dishes by metabolic safety, suggests modifications and gives you a damage-control plan for eating out."
            placeholder="Photograph menu or paste menu text below"
            cta="Get REVA Menu Ranking"
          />
        )}
        {tab === "voice" && (
          <UploadPanel
            title="Voice Meal Log"
            desc="Say or type what you ate. REVA logs it to memory, scores the meal, flags glucose risk and gives a post-meal action within seconds."
            placeholder="Type your meal description or use voice log"
            cta="Log + Analyse with REVA"
          />
        )}
        {tab === "recipes" && (
          <div>
            <p className="mb-4 text-sm text-text-secondary">
              FoodOS 10 Core Categories — starter recipe ideas. Click categories for expanded
              MRRRU-scored recipes.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {foodOsRecipeCategories.map((cat, i) => (
                <m.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                  className="card-hover rounded-xl border border-[rgba(201,168,76,0.15)] bg-[#141414] p-4"
                >
                  <h4 className="mb-1 text-sm font-bold text-[#c9a84c]">{cat.name}</h4>
                  <p className="text-xs text-text-secondary">{cat.desc}</p>
                </m.div>
              ))}
            </div>
            <button type="button" className="btn-ghost mt-6 text-sm">
              Load All 700+ Recipes
            </button>
          </div>
        )}

        <p className="mt-10 text-center text-sm text-text-muted">
          Explore 800+ Founder Recipes across 90+ Countries
        </p>
      </div>
    </section>
  );
}

function UploadPanel({
  title,
  desc,
  placeholder,
  cta,
}: {
  title: string;
  desc: string;
  placeholder: string;
  cta: string;
}) {
  return (
    <div className="glass max-w-3xl rounded-2xl p-6">
      <h3 className="mb-2 text-lg text-[#c9a84c]">{title}</h3>
      <p className="mb-4 text-sm text-text-secondary">{desc}</p>
      <div className="mb-4 flex min-h-[120px] items-center justify-center rounded-xl border-2 border-dashed border-[rgba(201,168,76,0.25)] bg-[#0a0a0a] px-4 text-center text-sm text-text-muted">
        {placeholder}
      </div>
      <label htmlFor="food-os-notes" className="sr-only">
        Your notes or context (optional)
      </label>
      <textarea
        id="food-os-notes"
        className="mb-4 w-full rounded-lg border border-[rgba(201,168,76,0.18)] bg-[#111] px-3 py-2 text-sm text-text-secondary outline-none"
        rows={3}
        placeholder="Your notes / context (optional)"
        readOnly
        aria-readonly
      />
      <button type="button" className="btn-gold text-sm">
        {cta}
      </button>
      <p className="mt-4 text-xs text-text-muted">
        Upload or enter content — REVA will tell you what to do next.
      </p>
    </div>
  );
}
