import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { AboutSection } from "@/components/home/about/about-section";
import { FaqSection } from "@/components/home/faq/faq-section";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "About the Training & Placement Cell of Government Engineering College, Ajmer — our mandate, accreditation, and the team behind campus placements.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="The Training & Placement Cell"
        description="Bridging engineering talent at GEC Ajmer with industry, through structured training, internships and campus recruitment."
      />
      <AboutSection />
      <FaqSection />
    </>
  );
}
