import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/marketing/Navbar";
import { createPageMetadata } from "@/lib/seo";
import { homePageJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
  ogImageAlt: "MetaboliQ OS — founder-proven metabolic operating system",
});
import { Hero } from "@/components/marketing/Hero";
import { VisualDemoLayer } from "@/components/marketing/VisualDemoLayer";
import { PlatformPreview } from "@/components/marketing/PlatformPreview";
import { StatsStrip } from "@/components/marketing/StatsStrip";
import { MRRRUSection } from "@/components/marketing/MRRRUSection";
import { FounderStory } from "@/components/marketing/FounderStory";
import { PhasesSection } from "@/components/marketing/PhasesSection";
import { CgmSection } from "@/components/marketing/CgmSection";
import { FoodOsSection } from "@/components/marketing/FoodOsSection";
import { BloodReportSection } from "@/components/marketing/BloodReportSection";
import { NinePillarsSection } from "@/components/marketing/NinePillarsSection";
import { MythBustersSection } from "@/components/marketing/MythBustersSection";
import { WearablesSection } from "@/components/marketing/WearablesSection";
import { SignalCaptureSection } from "@/components/marketing/SignalCaptureSection";
import { FaceScanSection } from "@/components/marketing/FaceScanSection";
import { PlatformFeatures } from "@/components/marketing/PlatformFeatures";
import { PlatformDepthSection } from "@/components/marketing/PlatformDepthSection";
import { DecisionCockpitSection } from "@/components/marketing/DecisionCockpitSection";
import { SafetyTrustSection } from "@/components/marketing/SafetyTrustSection";
import { AlphaComingSoon } from "@/components/marketing/AlphaComingSoon";
import { FounderQuoteSection } from "@/components/marketing/FounderQuoteSection";
import { Footer } from "@/components/marketing/Footer";
import { RevaCommandBar } from "@/components/marketing/RevaCommandBar";

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
      <RevaCommandBar />
    </main>
    </>
  );
}
