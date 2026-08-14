import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Anti-Ragging Committee",
  description: "Anti-ragging policy and reporting channel at Government Engineering College, Ajmer.",
  path: "/anti-ragging",
});

export default function AntiRaggingPage() {
  return (
    <>
      <PageHero eyebrow="Student Safety" title="Anti-Ragging Committee" />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="max-w-none text-body-md leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:first:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
          <p>
            Government Engineering College, Ajmer, maintains a strict zero-tolerance policy on ragging, in line with
            UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">Reporting an incident</h2>
          <p>
            Any student who experiences or witnesses ragging can report it to the College&apos;s Anti-Ragging Committee,
            the hostel warden, or directly to the administration. Reports can also be routed through the T&P Office
            at <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>, which will forward them
            to the appropriate committee.
          </p>
          <p>
            The national UGC anti-ragging helpline is also available: <strong>1800-180-5522</strong> (toll-free).
          </p>
          <p>
            For the current committee composition and detailed procedure, please confirm with the College
            administration office.
          </p>
        </div>
      </Section>
    </>
  );
}
