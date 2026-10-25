import type { Metadata } from "next";
import { PageIntro } from "@/components/site/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Notice | MetaboliQ OS",
  description: "How MetaboliQ OS handles personal information.",
  path: "/privacy",
});

export default function Page() {
  return (
    <PageIntro eyebrow="Legal" title="Privacy Notice">
      <p>Our Privacy Notice is being finalised and will be published on this page.</p>
    </PageIntro>
  );
}
