/**
 * Public Live V1 navigation — one source of truth for the header, the mobile
 * menu and the footer (Live V1 instructions §2). Home is reached through the
 * logo; Media & Events stays last.
 */

export type NavLink = { label: string; href: string };
export type NavSection = { label: string; href: string; items: NavLink[] };

export const mainNav: NavSection[] = [
  {
    label: "About & Evidence",
    href: "/about",
    items: [
      { label: "Our Mission", href: "/about#mission" },
      { label: "Founder’s Journey", href: "/about#founder-journey" },
      { label: "Evidence", href: "/about#evidence" },
      { label: "Future", href: "/about#future" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    items: [
      { label: "How It Works", href: "/platform/how-it-works" },
      { label: "5 Steps", href: "/platform/how-it-works#steps" },
      { label: "6 MRRRU Phases", href: "/platform/phases" },
      { label: "9 Pillars", href: "/platform/pillars" },
      { label: "Sleep", href: "/platform/sleep" },
      { label: "Stress", href: "/platform/stress" },
      { label: "Movement & Fitness", href: "/platform/movement" },
      { label: "Data & Devices", href: "/platform/data-devices" },
      { label: "FAQs", href: "/platform#faqs" },
    ],
  },
  {
    label: "Food OS",
    href: "/food-os",
    items: [
      { label: "What It Is", href: "/food-os#what-it-is" },
      { label: "How to Use It", href: "/food-os#how-to-use" },
      { label: "Why Personalisation Matters", href: "/food-os#personalisation" },
      { label: "MCSI", href: "/food-os#mcsi" },
    ],
  },
  {
    label: "REVA",
    href: "/reva",
    items: [
      { label: "Meet Your Coach", href: "/reva#meet" },
      { label: "How to Use REVA", href: "/reva#how-to-use" },
      { label: "Signals & Patterns", href: "/reva#signals" },
      { label: "Personal Metabolic Memory", href: "/reva#memory" },
    ],
  },
  {
    label: "Motivation",
    href: "/motivation",
    items: [
      { label: "MQOS Score", href: "/motivation#score" },
      { label: "Progress", href: "/motivation#progress" },
      { label: "Confidence", href: "/motivation#confidence" },
      { label: "Consistency", href: "/motivation#consistency" },
      { label: "MQOS Credits", href: "/motivation#credits" },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
    items: [
      { label: "All", href: "/learn" },
      { label: "Movement & Fitness", href: "/learn?category=movement-fitness" },
      { label: "Nutrition + MCSI", href: "/learn?category=nutrition-mcsi" },
      { label: "Metabolic Science", href: "/learn?category=metabolic-science" },
      { label: "Sleep", href: "/learn?category=sleep" },
      { label: "Stress", href: "/learn?category=stress" },
      { label: "Supplements", href: "/learn?category=supplements" },
      { label: "Devices & Wearables", href: "/learn?category=devices-wearables" },
      { label: "Wellness", href: "/learn?category=wellness" },
    ],
  },
  {
    label: "Media & Events",
    href: "/media-events",
    items: [
      { label: "Upcoming Events", href: "/media-events#upcoming" },
      { label: "Past Events", href: "/media-events#past" },
      { label: "Webinars", href: "/media-events#webinars" },
      { label: "Archive", href: "/media-events#archive" },
      { label: "YouTube", href: "/media-events#youtube" },
      { label: "Articles", href: "/media-events#articles" },
      { label: "Social Media", href: "/media-events#social" },
    ],
  },
];

/** Audience and account links (§2 utility navigation). */
export const utilityNav: NavLink[] = [
  { label: "For You", href: "/for-you" },
  { label: "Partners", href: "/partners" },
  { label: "Corporate", href: "/corporate" },
  { label: "Memberships & Plans", href: "/plans" },
];

/**
 * The signed-in product lives in the MetaboliQ OS app. Sign In / Sign Up hand
 * off to its existing, verified routes — no new auth URL is invented here.
 */
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL ?? "https://metaboli-q-os-frontend.vercel.app").replace(/\/$/, "");
export const appLinks = {
  signIn: `${APP_URL}/login`,
  signUp: `${APP_URL}/signup`,
};

export const startJourneyHref = "/start";

export const footerNav: NavLink[] = [
  { label: "About & Evidence", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Food OS", href: "/food-os" },
  { label: "REVA", href: "/reva" },
  { label: "Learn", href: "/learn" },
  { label: "Partners", href: "/partners" },
  { label: "Corporate", href: "/corporate" },
  { label: "Media & Events", href: "/media-events" },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

/** Verified channels. YouTube is the MetaboliQ OS channel that publishes the founder videos. */
export const socialChannels = [
  { name: "YouTube", href: "https://www.youtube.com/@metaboliQOS" },
  { name: "LinkedIn", href: "https://linkedin.com/in/mrupatel" },
  { name: "Instagram", href: "https://instagram.com/mrupatel" },
  { name: "Facebook", href: "https://facebook.com/MruPatelEntrepreneur" },
  { name: "TikTok", href: "https://tiktok.com/@mrupatel" },
] as const;
