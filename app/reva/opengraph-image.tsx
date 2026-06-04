import { createOgImage, ogImageSize } from "@/lib/og-image";

export const alt = "REVA AI — MetaboliQ OS metabolic intelligence";
export const size = ogImageSize;
export const contentType = "image/png";

export default function RevaOpenGraphImage() {
  return createOgImage({
    title: "REVA AI",
    subtitle: "Revamp · Execute · Vitality · Advisor — your personal metabolic decision cockpit.",
    badge: "REVA",
  });
}
