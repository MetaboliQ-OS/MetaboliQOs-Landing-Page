import type { Metadata } from "next";
import { PageIntro, Section } from "@/components/site/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Disclaimer | MetaboliQ OS",
  description: "MetaboliQ OS provides educational information and coaching support. It does not diagnose, prescribe or replace medical care.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" title="Disclaimer">
        <p>
          MetaboliQ OS provides educational information and coaching support. It does not diagnose, prescribe or
          replace medical care. Consult a qualified clinician before changing medication or treatment.
        </p>
      </PageIntro>
      <Section>
        <div className="max-w-3xl space-y-4 leading-relaxed text-text-secondary">
          <p>
            REVA provides educational coaching and decision support. It does not diagnose, prescribe or replace medical
            care. Discuss medication and treatment changes with a qualified clinician.
          </p>
          <p>
            The founder’s records describe his own experience. Personal experiments are not clinical trials. Your
            starting point, circumstances and response may differ.
          </p>
        </div>
      </Section>
    </>
  );
}
