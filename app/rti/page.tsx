import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Right to Information (RTI)",
  description: "How to file a Right to Information (RTI) request with Government Engineering College, Ajmer.",
  path: "/rti",
});

export default function RtiPage() {
  return (
    <>
      <PageHero
        eyebrow="RTI"
        title="Right to Information"
        description="Government Engineering College, Ajmer, is a public institution and responds to requests filed under the Right to Information Act, 2005."
      />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="max-w-none text-body-md leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:first:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
          <h2 className="font-heading text-heading-lg text-text-primary">Filing an RTI request</h2>
          <p>
            Applications under the RTI Act, 2005 relating to the College or its Training & Placement Cell can be
            submitted in writing to the College&apos;s Public Information Officer, along with the prescribed application
            fee, as per Government of Rajasthan RTI rules.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">Where to send your application</h2>
          <ul>
            <li>Postal address: {siteConfig.contact.address}</li>
            <li>
              Email queries: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
          </ul>
          <p>
            For the current designated Public Information Officer, appellate authority and fee details, please
            confirm with the College administration office, as these are periodically updated.
          </p>
        </div>
      </Section>
    </>
  );
}
