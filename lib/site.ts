/** Public site identity — used by metadata, sitemap, and JSON-LD. */
export const siteConfig = {
  name: "MetaboliQ OS",
  shortName: "MetaboliQ",
  legalName: "MetaboliQ OS",
  tagline: "Your Metabolic Operating System",
  defaultTitle: "MetaboliQ OS | Powered by MRRRU — Alpha",
  defaultDescription:
    "Founder-proven metabolic operating system: REVA AI, Food OS, CGM, blood markers, wearables and Personal Metabolic Memory. HbA1c 8.3%→5.3% in five months — documented in real time.",
  creator: "Mru Patel",
  locale: "en_GB",
  themeColor: "#080808",
  keywords: [
    "metabolic health",
    "metabolic operating system",
    "HbA1c reversal",
    "CGM continuous glucose monitor",
    "REVA AI health coach",
    "Food OS",
    "MRRRU framework",
    "personal metabolic memory",
    "blood biomarkers",
    "bio impedance",
    "wearables health",
    "type 2 diabetes lifestyle",
    "longevity",
    "MetaboliQ OS",
  ],
} as const;

/** Canonical origin for absolute URLs (OG, sitemap, JSON-LD). */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) {
    return configured.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export function absoluteUrl(path = ""): string {
  const base = getSiteUrl();
  if (!path) return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
