import type { Metadata } from "next";
import { FileText } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";

export const metadata: Metadata = buildMetadata({
  title: "Downloads",
  description: "Placement brochure, annual report, MoU template and registration forms from the T&P Cell, GEC Ajmer.",
  path: "/downloads",
});

const documents = [
  { title: "Placement Brochure 2026–27", description: "Full profile of the Cell, past recruiters and package trends.", href: "/downloads/brochure.pdf", status: "verified" as const },
  { title: "Annual Placement Report", description: "Year-wise placement statistics and highlights.", href: "/downloads/annual-report.pdf", status: "demo" as const },
  { title: "MoU Template", description: "Standard memorandum of understanding for recruiting partners.", href: "/downloads/mou-template.pdf", status: "demo" as const },
  { title: "Student Registration Form", description: "Registration form for the current placement cycle.", href: "/downloads/registration-form.pdf", status: "demo" as const },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads"
        title="Documents & Forms"
        description="Brochures, reports and forms published by the Training & Placement Cell."
      />

      <Section spacing="lg" surface="background" containerWidth="content">
        <SectionHeading
          eyebrow="Available Documents"
          heading="Brochures, reports & forms"
          subheading="The Placement Brochure 2026–27 is the verified source document for this site and is available below. The remaining forms are placeholders until the T&P Office uploads the actual PDFs."
        />

        <DemoDataNotice items={documents} className="mx-auto flex" />

        <ul className="mt-10 divide-y divide-border rounded-card border border-border bg-surface">
          {documents.map((doc) => (
            <li key={doc.href} className="flex items-center gap-4 px-5 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-body-md font-semibold text-text-primary">{doc.title}</span>
                <span className="block text-body-sm text-text-secondary">{doc.description}</span>
              </span>
              {doc.status === "verified" ? (
                <a
                  href={doc.href}
                  download
                  className="shrink-0 rounded-full bg-primary px-4 py-1.5 text-caption font-medium text-primary-foreground hover:bg-primary-hover"
                >
                  Download PDF
                </a>
              ) : (
                <span className="shrink-0 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-caption font-medium text-warning">
                  Awaiting official upload
                </span>
              )}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-body-sm text-text-secondary">
          Need a document urgently? Email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-medium text-primary hover:underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
