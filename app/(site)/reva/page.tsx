import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { RevaPageContent } from "@/components/marketing/RevaPageContent";
import { revaPageJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "REVA AI | MetaboliQ OS — Metabolic Intelligence",
  description:
    "REVA — Revamp, Execute, Vitality, Advisor. Personal metabolic AI for meal decisions, CGM glucose, wearables, blood markers, bio-impedance and MRRRU phase guidance.",
  path: "/reva",
  keywords: [
    "REVA AI",
    "metabolic AI coach",
    "CGM meal guidance",
    "Food OS",
    "MRRRU phases",
    "MetaboliQ OS",
  ],
  ogImageAlt: "REVA AI — personal metabolic intelligence on MetaboliQ OS",
});

export default function RevaPage() {
  return (
    <>
      <JsonLd data={revaPageJsonLd()} />
      <RevaPageContent />
    </>
  );
}
