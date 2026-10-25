/**
 * Public Live V1 copy that appears on more than one page. Wording is taken
 * from "MetaboliQ OS Live V1 instructions" (24 Oct 2026) — keep it in one
 * place so counts and steps never drift between screens (§13 Content
 * management: "No manual copies of different numbers on separate screens").
 */

/** Inventory strip (§3, §15 Resolved counts). Founder-reported. */
export const inventory = [
  { value: "12,000", label: "decision rules" },
  { value: "3,000+", label: "founder experiments" },
  { value: "70,000+", label: "recipes" },
] as const;

export const inventoryNote =
  "Founder-reported inventories. Personal experiments are not clinical trials.";

/** Food OS counts (§6). */
export const foodOsCounts = { recipes: "70,000+", categories: "10", tags: "130+" } as const;

/** The five steps (§5). `short` is the one-line preview used on Home. */
export const fiveSteps = [
  {
    title: "Build Your Starting Picture",
    short: "Share your goals and the health information you already have.",
    body: [
      "Tell us what you want to improve and share the health information you already have. Recent blood reports, body composition, blood pressure and your food, sleep and movement routines help establish your starting picture. Supported genetic or metabolic test reports can add context where available.",
      "For blood reports, use results from the last six months where possible. Keep the test dates visible. You do not need to invent missing information or buy every test to begin.",
    ],
  },
  {
    title: "Receive Your Personalised Plan",
    short: "A personalised report and a 90-day plan in 30-day stages.",
    body: [
      "Bring your information and goals into a personalised report and a 90-day action plan, organised into practical 30-day stages. Understand what deserves attention, which actions to prioritise and what to track next.",
      "Your report connects the available information with food, movement, sleep, stress and recovery. Where findings need professional interpretation, it highlights what to discuss with a qualified clinician. Progress depends on your starting point, circumstances and follow-through.",
    ],
    deliverables: [
      "Your starting-point report",
      "Personalised insights and priorities",
      "A 90-day plan in 30-day stages",
    ],
  },
  {
    title: "Record What Changes",
    short: "Add daily readings and check-ins, and see what changed.",
    body: [
      "Add relevant daily readings and check-ins. Track your actions, notice patterns and build a clearer understanding of your body. A useful record helps you see what changed instead of relying on memory.",
    ],
  },
  {
    title: "Work With REVA",
    short: "Ask your personal AI coach what to do next — and why.",
    body: [
      "Ask your personal AI coach about meal choices, timing, sleep, stress, movement and recovery. REVA is designed to use your available information and goals to explain the next action, the reason behind it and what to monitor.",
    ],
  },
  {
    title: "Review and Adjust",
    short: "Review progress and adjust your plan as things change.",
    body: [
      "Review your progress and adjust your plan as your information and circumstances change. Where included in your membership, guidance and scheduled support help you work through questions and keep moving towards your goals.",
    ],
  },
] as const;

/** Founder videos (§13). Final 3–4 minute edit to replace these when ready. */
export const founderVideos = [
  { id: "jtqOl_FAcK8", title: "The Journey to MetaboliQ OS: Why the Status Quo Had to Change" },
  { id: "ZRkXQ5WHWzg", title: "The Real Reason Your Diet & Fitness Apps Aren’t Working" },
  { id: "LrK25SmXKY4", title: "The Unspoken Truth About Blood Sugar, Spikes, and Healthy Diets" },
] as const;

export const youtubeChannel = "https://www.youtube.com/@metaboliQOS";
