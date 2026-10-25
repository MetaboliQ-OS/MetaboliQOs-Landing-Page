/**
 * "Find My Starting Point" questionnaire (Live V1 §11, §13).
 *
 * DRAFT for Mru's review: the questions are the document's; the answer choices
 * and the focus → action mapping below are proposed here and must be approved
 * before launch (§11 build notes). The result is a starting focus from the
 * visitor's own answers — never a diagnosis, risk level or clinical phase.
 * Only option ids travel; nothing free-text is collected.
 */

export type Option = { id: string; label: string; summary?: string };
export type Question = { id: string; title: string; multi?: boolean; options: Option[] };

export const questions: Question[] = [
  {
    id: "goal",
    title: "What would you most like to improve?",
    options: [
      { id: "energy", label: "Steadier energy through the day", summary: "you want steadier energy through the day" },
      { id: "glucose", label: "Steadier blood sugar after meals", summary: "you want steadier blood sugar after meals" },
      { id: "weight", label: "Weight and body composition", summary: "you want to work on weight and body composition" },
      { id: "sleep", label: "Sleep and recovery", summary: "you want better sleep and recovery" },
      { id: "stress", label: "Stress and cravings", summary: "you want to manage stress and cravings" },
      { id: "fitness", label: "Fitness and strength", summary: "you want to build fitness and strength" },
      { id: "longevity", label: "Long-term health and longevity", summary: "you are focused on long-term health" },
    ],
  },
  {
    id: "meals",
    title: "What does your usual meal routine look like?",
    options: [
      { id: "regular", label: "Regular meals at similar times", summary: "your meals are fairly regular" },
      { id: "late", label: "I often eat late in the evening", summary: "you often eat late" },
      { id: "skip", label: "I often skip meals", summary: "you often skip meals" },
      { id: "snack", label: "I snack through the day", summary: "you snack through the day" },
      { id: "varies", label: "It changes from day to day", summary: "your meal routine changes day to day" },
    ],
  },
  {
    id: "movement",
    title: "How does movement fit into your week?",
    options: [
      { id: "rarely", label: "I rarely exercise", summary: "you rarely exercise" },
      { id: "walks", label: "Mostly walking", summary: "you mostly walk" },
      { id: "some", label: "Planned exercise 1–2 times a week", summary: "you exercise once or twice a week" },
      { id: "often", label: "Planned exercise 3 or more times a week", summary: "you exercise most weeks" },
    ],
  },
  {
    id: "sleep",
    title: "How would you describe your sleep and energy?",
    options: [
      { id: "good", label: "I usually sleep well and feel rested", summary: "you usually feel rested" },
      { id: "short", label: "I often sleep less than I would like", summary: "you often sleep less than you would like" },
      { id: "broken", label: "My sleep is often broken", summary: "your sleep is often broken" },
      { id: "tired", label: "I feel tired even after sleeping", summary: "you feel tired even after sleeping" },
    ],
  },
  {
    id: "food",
    title: "Which food preferences should we consider?",
    multi: true,
    options: [
      { id: "none", label: "No particular preference" },
      { id: "vegetarian", label: "Vegetarian" },
      { id: "vegan", label: "Vegan" },
      { id: "indian", label: "Indian cuisine" },
      { id: "mediterranean", label: "Mediterranean" },
      { id: "east-asian", label: "East Asian" },
      { id: "eat-out", label: "I eat out often" },
    ],
  },
  {
    id: "tracking",
    title: "What information do you already track?",
    multi: true,
    options: [
      { id: "nothing", label: "Nothing yet" },
      { id: "weight", label: "Weight" },
      { id: "activity", label: "Steps or activity" },
      { id: "sleep-device", label: "Sleep (wearable)" },
      { id: "bp", label: "Blood pressure" },
      { id: "glucose", label: "Glucose (meter or CGM)" },
      { id: "bloods", label: "A recent blood test" },
    ],
  },
  {
    id: "first",
    title: "Which first action feels manageable for you?",
    options: [
      { id: "walk", label: "A 10-minute walk after a meal", summary: "a 10-minute walk after a meal" },
      { id: "sequence", label: "Eating vegetables and protein before carbohydrates", summary: "eating vegetables and protein before carbohydrates" },
      { id: "window", label: "A regular time for my last meal of the day", summary: "a regular time for your last meal of the day" },
      { id: "bedtime", label: "A consistent bedtime", summary: "a consistent bedtime" },
      { id: "log", label: "Recording one meal a day", summary: "recording one meal a day" },
      { id: "winddown", label: "A short daily wind-down", summary: "a short daily wind-down" },
    ],
  },
];

export type Answers = Record<string, string[]>;

/** Starting focus per goal — plain areas of daily life, not health states. */
const FOCUS: Record<string, string> = {
  energy: "steadier daily energy",
  glucose: "meal structure and eating order",
  weight: "meal structure and daily movement",
  sleep: "sleep and recovery",
  stress: "stress and daily routine",
  fitness: "movement and recovery",
  longevity: "consistent daily habits",
};

/** Used only when the visitor skips the first-action question. */
const DEFAULT_ACTION: Record<string, string> = {
  energy: "window",
  glucose: "sequence",
  weight: "walk",
  sleep: "bedtime",
  stress: "winddown",
  fitness: "walk",
  longevity: "log",
};

function pick(questionId: string, answers: Answers): Option | undefined {
  const id = answers[questionId]?.[0];
  return questions.find((q) => q.id === questionId)?.options.find((o) => o.id === id);
}

function joinList(parts: string[]) {
  if (parts.length <= 1) return parts.join("");
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

export type StartResult = { focusKey: string; focus: string; summary: string; action: string };

/** Pure and deterministic: the same answers always give the same result. */
export function startingResult(answers: Answers): StartResult {
  const goal = pick("goal", answers);
  const sleep = pick("sleep", answers);
  let focusKey = goal?.id;
  if (!focusKey) focusKey = sleep && sleep.id !== "good" ? "sleep" : "longevity";

  const summaries = [goal, pick("meals", answers), pick("movement", answers), sleep]
    .map((o) => o?.summary)
    .filter((s): s is string => Boolean(s))
    .slice(0, 3);

  const firstQ = questions.find((q) => q.id === "first")!;
  const chosen = pick("first", answers) ?? firstQ.options.find((o) => o.id === DEFAULT_ACTION[focusKey]);
  const action = chosen?.summary ?? "recording one meal a day";

  return {
    focusKey,
    focus: FOCUS[focusKey] ?? FOCUS.longevity,
    summary: summaries.length ? joinList(summaries) : "a little about your routine",
    action,
  };
}

/** Accepts only known question / option ids (used by the email route). */
export function sanitiseAnswers(input: unknown): Answers {
  const out: Answers = {};
  if (!input || typeof input !== "object") return out;
  for (const q of questions) {
    const raw = (input as Record<string, unknown>)[q.id];
    if (!Array.isArray(raw)) continue;
    const ids = raw.filter((v): v is string => typeof v === "string" && q.options.some((o) => o.id === v));
    if (ids.length) out[q.id] = q.multi ? [...new Set(ids)] : [ids[0]];
  }
  return out;
}
