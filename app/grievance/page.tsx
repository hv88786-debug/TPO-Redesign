import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Grievance Redressal",
  description: "How students and recruiters can raise a grievance with the Training & Placement Cell, GEC Ajmer.",
  path: "/grievance",
});

export default function GrievancePage() {
  return (
    <>
      <PageHero
        eyebrow="Grievance Redressal"
        title="Grievance Redressal"
        description="A named channel for students, parents and recruiters to raise concerns about the placement process."
      />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="max-w-none text-body-md leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:first:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
          <h2 className="font-heading text-heading-lg text-text-primary">Raising a grievance</h2>
          <p>
            Any student, parent or recruiting partner with a concern about the conduct of a placement drive, the
            training program, or the T&P Cell&apos;s process can raise it directly with the Training & Placement Office.
            Grievances are acknowledged and looked into by the Cell in coordination with the College administration.
          </p>
          <h2 className="font-heading text-heading-lg text-text-primary">How to reach us</h2>
          <ul>
            <li>
              Email: <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>Phone: {siteConfig.contact.phone}</li>
            <li>In person: {siteConfig.contact.address}</li>
          </ul>
          <p>
            For grievances relating to ragging or harassment specifically, please use the dedicated{" "}
            <a href="/anti-ragging">Anti-Ragging Committee</a> and <a href="/icc-posh">ICC / POSH</a> channels, which
            are handled by separate committees with their own escalation process.
          </p>
        </div>
      </Section>
    </>
  );
}
