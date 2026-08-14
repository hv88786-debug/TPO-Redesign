import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { PlacementsSection } from "@/components/home/placements/placements-section";
import { SuccessStoriesSection } from "@/components/home/success-stories/success-stories-section";
import { TestimonialsSection } from "@/components/home/testimonials/testimonials-section";
import { CtaSection } from "@/components/home/cta/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Placements",
  description:
    "Placement statistics, year-wise trends, the student journey and recruiter wall for Government Engineering College, Ajmer's Training & Placement Cell.",
  path: "/placements",
});

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Placements"
        title="Placement Record & Process"
        description="Year-wise placement statistics, the student journey from registration to offer, and the recruiters who hire from our campus."
      />
      <PlacementsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
