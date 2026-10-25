import type { Metadata } from "next";
import { TopicPage } from "@/components/site/TopicPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Sleep | MetaboliQ OS",
  description: "Make sleep part of the plan — your sleep routine and device information alongside food, movement and recovery.",
  path: "/platform/sleep",
});

export default function SleepPage() {
  return (
    <TopicPage
      topic="sleep"
      eyebrow="Sleep"
      title="Make Sleep Part of the Plan."
      learn={{ label: "Read About Sleep", href: "/learn?category=sleep" }}
    >
      <p>
        Record your sleep routine, how you feel and the information your devices provide. MetaboliQ OS is designed to
        put that context alongside your food, movement and recovery, so sleep is considered in your daily decisions.
      </p>
    </TopicPage>
  );
}
