import type { Metadata } from "next";
import Link from "next/link";
import { FileText, GraduationCap, ListChecks, MessageSquareQuote } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { TrainingSection } from "@/components/home/training/training-section";
import { CtaSection } from "@/components/home/cta/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Students",
  description:
    "Student resources from the Training & Placement Cell, GEC Ajmer — training programs, placement registration, downloads and success stories.",
  path: "/students",
});

const resourceLinks = [
  {
    icon: ListChecks,
    title: "Placement Journey",
    description: "See the full path from registration to offer letter.",
    href: "/placements#student-journey",
  },
  {
    icon: FileText,
    title: "Downloads",
    description: "Placement brochure, registration form and policy documents.",
    href: "/downloads",
  },
  {
    icon: MessageSquareQuote,
    title: "Success Stories & Testimonials",
    description: "Read how seniors from your branch got placed.",
    href: "/placements#success-stories",
  },
  {
    icon: GraduationCap,
    title: "Apply for Placement Cycle",
    description: "Register with the T&P Cell for the current placement season.",
    href: "/apply",
  },
];

export default function StudentsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Students"
        title="Student Resources"
        description="Training schedules, registration, downloads and everything else you need for the placement season, in one place."
      />

      <Section spacing="lg" surface="background" containerWidth="wide">
        <SectionHeading
          eyebrow="Quick Links"
          heading="Everything you need this placement season"
          subheading="Start with training if you're preparing, or jump straight to registration if you're ready."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resourceLinks.map(({ icon: Icon, title, description, href }) => (
            <li key={title}>
              <Link
                href={href}
                className="group flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent/15 group-hover:text-accent-ink">
                  <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </span>
                <span className="mt-4 text-body-md font-semibold text-text-primary">{title}</span>
                <span className="mt-1.5 text-body-sm text-text-secondary">{description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <TrainingSection />
      <CtaSection />
    </>
  );
}
