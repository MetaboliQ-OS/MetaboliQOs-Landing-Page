import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { PlatformPreview } from "@/components/marketing/PlatformPreview";
import { MRRRUSection } from "@/components/marketing/MRRRUSection";
import { FounderStory } from "@/components/marketing/FounderStory";
import { PhasesSection } from "@/components/marketing/PhasesSection";
import { PlatformFeatures } from "@/components/marketing/PlatformFeatures";
import { AlphaComingSoon } from "@/components/marketing/AlphaComingSoon";
import { Footer } from "@/components/marketing/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PlatformPreview />
      <MRRRUSection />
      <FounderStory />
      <PhasesSection />
      <PlatformFeatures />
      <AlphaComingSoon />
      <Footer />
    </main>
  );
}
