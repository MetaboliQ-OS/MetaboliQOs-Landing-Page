import type { Metadata } from "next";
import { PageIntro } from "@/components/site/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use | MetaboliQ OS",
  description: "The terms that apply to using MetaboliQ OS.",
  path: "/terms",
});

export default function Page() {
  return (
    <PageIntro eyebrow="Legal" title="Terms of Use">
      <p>Our Terms of Use is being finalised and will be published on this page.</p>
    </PageIntro>
  );
}
