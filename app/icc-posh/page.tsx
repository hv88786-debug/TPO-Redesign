import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "ICC / POSH",
  description: "Internal Complaints Committee under the POSH Act, 2013, at Government Engineering College, Ajmer.",
  path: "/icc-posh",
});

export default function IccPoshPage() {
  return (
    <>
      <PageHero eyebrow="Student & Staff Safety" title="Internal Complaints Committee (ICC / POSH)" />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="max-w-none text-body-md leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:first:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
          <p>
            Government Engineering College, Ajmer, maintains an Internal Complaints Committee (ICC) as required under
            the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (&quot;POSH
            Act&quot;), covering both staff and students on campus and during placement-related activities.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">Filing a complaint</h2>
          <p>
            Complaints can be submitted in writing to the ICC directly, or routed through the T&P Office at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> for forwarding, which will
            be treated with confidentiality as required under the Act.
          </p>
          <p>
            For the current committee composition, please confirm with the College administration office.
          </p>
        </div>
      </Section>
    </>
  );
}
