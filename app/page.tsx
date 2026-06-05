import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/marketing/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { homePageJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";
import { Hero } from "@/components/marketing/Hero";
import { VisualDemoLayer } from "@/components/marketing/VisualDemoLayer";
import { PlatformPreview } from "@/components/marketing/PlatformPreview";
import { StatsStrip } from "@/components/marketing/StatsStrip";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  ogImageAlt: "MetaboliQ OS — founder-proven metabolic operating system",
});

const MRRRUSection = dynamic(() =>
  import("@/components/marketing/MRRRUSection").then((mod) => mod.MRRRUSection),
);
const FounderStory = dynamic(() =>
  import("@/components/marketing/FounderStory").then((mod) => mod.FounderStory),
);
const PhasesSection = dynamic(() =>
  import("@/components/marketing/PhasesSection").then((mod) => mod.PhasesSection),
);
const CgmSection = dynamic(() =>
  import("@/components/marketing/CgmSection").then((mod) => mod.CgmSection),
);
const FoodOsSection = dynamic(() =>
  import("@/components/marketing/FoodOsSection").then((mod) => mod.FoodOsSection),
);
const BloodReportSection = dynamic(() =>
  import("@/components/marketing/BloodReportSection").then((mod) => mod.BloodReportSection),
);
const NinePillarsSection = dynamic(() =>
  import("@/components/marketing/NinePillarsSection").then((mod) => mod.NinePillarsSection),
);
const MythBustersSection = dynamic(() =>
  import("@/components/marketing/MythBustersSection").then((mod) => mod.MythBustersSection),
);
const WearablesSection = dynamic(() =>
  import("@/components/marketing/WearablesSection").then((mod) => mod.WearablesSection),
);
const SignalCaptureSection = dynamic(() =>
  import("@/components/marketing/SignalCaptureSection").then((mod) => mod.SignalCaptureSection),
);
const FaceScanSection = dynamic(() =>
  import("@/components/marketing/FaceScanSection").then((mod) => mod.FaceScanSection),
);
const PlatformFeatures = dynamic(() =>
  import("@/components/marketing/PlatformFeatures").then((mod) => mod.PlatformFeatures),
);
const PlatformDepthSection = dynamic(() =>
  import("@/components/marketing/PlatformDepthSection").then((mod) => mod.PlatformDepthSection),
);
const DecisionCockpitSection = dynamic(() =>
  import("@/components/marketing/DecisionCockpitSection").then((mod) => mod.DecisionCockpitSection),
);
const SafetyTrustSection = dynamic(() =>
  import("@/components/marketing/SafetyTrustSection").then((mod) => mod.SafetyTrustSection),
);
const AlphaComingSoon = dynamic(() =>
  import("@/components/marketing/AlphaComingSoon").then((mod) => mod.AlphaComingSoon),
);
const FounderQuoteSection = dynamic(() =>
  import("@/components/marketing/FounderQuoteSection").then((mod) => mod.FounderQuoteSection),
);
const Footer = dynamic(() =>
  import("@/components/marketing/Footer").then((mod) => mod.Footer),
);
import { DeferredRevaCommandBar } from "@/components/marketing/DeferredRevaCommandBar";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageJsonLd()} />
      <main>
        <Navbar />
        <Hero />
        <VisualDemoLayer />
        <PlatformPreview />
        <StatsStrip />
        <MRRRUSection />
        <FounderStory />
        <PhasesSection />
        <CgmSection />
        <FoodOsSection />
        <BloodReportSection />
        <NinePillarsSection />
        <MythBustersSection />
        <WearablesSection />
        <SignalCaptureSection />
        <FaceScanSection />
        <PlatformFeatures />
        <PlatformDepthSection />
        <DecisionCockpitSection />
        <SafetyTrustSection />
        <AlphaComingSoon />
        <FounderQuoteSection />
        <Footer />
        <DeferredRevaCommandBar />
      </main>
    </>
  );
}
