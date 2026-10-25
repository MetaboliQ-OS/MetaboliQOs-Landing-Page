import type { Metadata } from "next";
import { TopicPage } from "@/components/site/TopicPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Stress | MetaboliQ OS",
  description: "Stress, cravings and disrupted routines belong in the picture of your daily decisions.",
  path: "/platform/stress",
});

export default function StressPage() {
  return (
    <TopicPage
      topic="stress"
      eyebrow="Stress"
      title="Your Day Affects Your Decisions."
      learn={{ label: "Read About Stress", href: "/learn?category=stress" }}
    >
      <p>
        Stress, cravings and disrupted routines belong in the picture. Record what you notice and use that context to
        identify practical actions you can follow through on.
      </p>
    </TopicPage>
  );
}
