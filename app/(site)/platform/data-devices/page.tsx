import type { Metadata } from "next";
import { TopicPage } from "@/components/site/TopicPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Data & Devices | MetaboliQ OS",
  description: "Start with the information you have. You do not need every device to begin.",
  path: "/platform/data-devices",
});

export default function DataDevicesPage() {
  return (
    <TopicPage
      topic="data-devices"
      eyebrow="Data & Devices"
      title="Start With the Information You Have."
      learn={{ label: "Read About Devices & Wearables", href: "/learn?category=devices-wearables" }}
    >
      <p>
        You do not need every device to begin. Use the supported records and measurements available to you. Device
        connections, file uploads and manual-entry options will be described according to what the platform actually
        supports. Availability may vary by device and format.
      </p>
    </TopicPage>
  );
}
