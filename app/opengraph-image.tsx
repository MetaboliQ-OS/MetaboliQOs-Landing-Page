import { createOgImage, ogImageSize } from "@/lib/og-image";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return createOgImage({
    title: siteConfig.tagline,
    subtitle: "REVA AI · Food OS · CGM · Personal Metabolic Memory — built from real founder data.",
  });
}
