import type { Metadata } from "next";
import { Navbar } from "@/components/marketing/Navbar";
import { RevaPageContent } from "@/components/marketing/RevaPageContent";
import { Footer } from "@/components/marketing/Footer";
import { RevaCommandBar } from "@/components/marketing/RevaCommandBar";

export const metadata: Metadata = {
  title: "REVA AI | MetaboliQ OS",
  description:
    "REVA — Revamp, Execute, Vitality, Advisor. Your personal metabolic intelligence: meal decisions, CGM, wearables, blood markers and MRRRU phase guidance.",
};

export default function RevaPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <Navbar />
      <RevaPageContent />
      <Footer />
      <RevaCommandBar />
    </main>
  );
}
