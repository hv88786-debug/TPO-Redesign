import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { TrainingSection } from "@/components/home/training/training-section";
import { CtaSection } from "@/components/home/cta/cta-section";

export const metadata: Metadata = buildMetadata({
  title: "Training Programs",
  description:
    "Structured pre-placement training run by the Training & Placement Cell of Government Engineering College, Ajmer — aptitude, technical and soft-skills preparation alongside the academic curriculum.",
  path: "/training",
});

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training"
        title="Training Programs"
        description="Structured training run by the Training & Placement Cell alongside the regular academic curriculum, to get every student placement-ready."
      />
      <TrainingSection />
      <CtaSection />
    </>
  );
}
