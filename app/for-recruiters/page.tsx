import type { Metadata } from "next";
import { ClipboardList, FileSignature, Handshake, Users } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { RecruitersWall } from "@/components/home/placements/recruiters-wall";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = buildMetadata({
  title: "For Recruiters",
  description:
    "Recruit engineering talent from Government Engineering College, Ajmer — the on-campus recruitment process and how to schedule a drive.",
  path: "/for-recruiters",
});

const processSteps = [
  {
    icon: FileSignature,
    step: "01",
    title: "Submit a Job Announcement Form (JAF)",
    description: "Share the role, eligible branches, CTC and eligibility criteria with the T&P Office.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Cell coordinates shortlisting",
    description: "We circulate the JAF to eligible students and handle resume shortlisting on your criteria.",
  },
  {
    icon: Users,
    step: "03",
    title: "Drive is scheduled on campus",
    description: "Written tests, group discussions and interview rounds are scheduled with full campus logistics support.",
  },
  {
    icon: Handshake,
    step: "04",
    title: "Offers are rolled out",
    description: "Selected students receive offer letters; the Cell follows up on onboarding formalities.",
  },
];

export default function ForRecruitersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Recruiters"
        title="Recruit From GEC Ajmer"
        description="A straightforward, no-fee on-campus recruitment process, supported end-to-end by the Training & Placement Cell."
      />

      <Section id="process" spacing="lg" surface="background" containerWidth="wide">
        <SectionHeading
          eyebrow="Recruitment Process"
          heading="How on-campus recruitment works"
          subheading="No participation fee for on-campus drives. The Cell handles coordination from JAF to offer rollout."
        />
        <ol className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map(({ icon: Icon, step, title, description }) => (
            <li
              key={step}
              className="relative flex flex-col rounded-card border border-border bg-surface p-6 shadow-xs"
            >
              <span className="font-heading text-heading-lg font-semibold text-accent/40">{step}</span>
              <span className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="mt-4 text-body-md font-semibold text-text-primary">{title}</span>
              <span className="mt-1.5 text-body-sm text-text-secondary">{description}</span>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="register" spacing="lg" surface="primary" containerWidth="content" className="text-center">
        <h2 className="font-heading text-display-sm font-semibold">Register as a Recruiter</h2>
        <p className="mx-auto mt-3 max-w-xl text-body-lg text-primary-foreground/80">
          Email the T&P Office with your Job Announcement Form, or call the Placement Cell directly to schedule a
          drive for the current placement season.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild variant="accent" size="lg">
            <a href={`mailto:${siteConfig.contact.email}?subject=Job%20Announcement%20Form`}>Send JAF by Email</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent text-white hover:bg-white/10">
            <a href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}>Call the T&P Office</a>
          </Button>
        </div>
      </Section>

      <Section spacing="lg" surface="muted" containerWidth="wide">
        <RecruitersWall />
      </Section>
    </>
  );
}
