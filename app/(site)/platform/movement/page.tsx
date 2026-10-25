import type { Metadata } from "next";
import { TopicPage } from "@/components/site/TopicPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Movement & Fitness | MetaboliQ OS",
  description: "Build movement around your goals, current ability and recovery, in the same picture as food and sleep.",
  path: "/platform/movement",
});

export default function MovementPage() {
  return (
    <TopicPage
      topic="movement"
      eyebrow="Movement & Fitness"
      title="Build Movement Around Your Starting Point."
      learn={{ label: "Read About Movement & Fitness", href: "/learn?category=movement-fitness" }}
    >
      <p>
        Your routine should account for your goals, current ability and recovery. MetaboliQ OS is designed to bring
        movement into the same picture as food, sleep and your recorded responses, with practical actions you can review
        over time.
      </p>
    </TopicPage>
  );
}
