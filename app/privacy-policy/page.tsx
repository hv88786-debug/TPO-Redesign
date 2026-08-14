import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How the Training & Placement Cell, GEC Ajmer, collects and uses information submitted through this site.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="max-w-none text-body-md leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:first:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
          <p>
            This page explains, in plain terms, how the Training & Placement Cell of Government Engineering
            College, Ajmer, handles information submitted through this website.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">Information we collect</h2>
          <p>
            When you use the Quick Enquiry form or contact us by email, we receive whatever details you choose to
            share — typically your name, contact information and the nature of your query. We do not use tracking
            cookies or third-party advertising trackers on this site.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">How we use it</h2>
          <p>
            Information you submit is used only to respond to your enquiry or process your placement/recruitment
            registration. It is not sold or shared with third parties outside the College and its recruiting
            partners for placement-related purposes.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
