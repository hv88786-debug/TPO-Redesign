import { trainingPrograms } from "@/constants/training";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { TrainingGrid } from "@/components/home/training/training-grid";

/**
 * "Training Programs" — premium vertical learning cards in a two-column
 * staggered layout on desktop (single column on mobile), each carrying a
 * lifecycle status badge and a progress indicator. See training-grid.tsx
 * for the stagger/offset mechanics and training-card.tsx for the card
 * itself; this file only wires the section shell to constants/training.ts.
 */
export function TrainingSection() {
  return (
    <Section spacing="lg" surface="muted" containerWidth="wide" aria-labelledby="training-heading">
      <SectionHeading
        headingId="training-heading"
        eyebrow="Training Programs"
        heading="Preparing students for the placement season"
        subheading="Structured training run by the Training & Placement Cell alongside the regular academic curriculum."
      />

      <DemoDataNotice items={trainingPrograms} className="mx-auto flex" />

      <TrainingGrid />
    </Section>
  );
}
