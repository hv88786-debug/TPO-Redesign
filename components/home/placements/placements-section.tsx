import { placementsCopy } from "@/constants/placements";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { KpiGrid } from "@/components/home/placements/kpi-grid";
import { LazyPlacementChart } from "@/components/home/placements/lazy-chart";
import { RecruitersWall } from "@/components/home/placements/recruiters-wall";
import { PlacementTimeline } from "@/components/home/placements/placement-timeline";
import { PlacementRosterGrid } from "@/components/home/placements/placement-roster-grid";

/**
 * The homepage's strongest visual band after the Hero. Four stacked
 * sub-sections — KPI cards, an interactive trend chart, an animated
 * recruiter wall, and the Student Journey timeline — share one <Section>
 * so vertical rhythm stays governed by the layout primitive rather than
 * one-off spacing per sub-block. Each sub-block still manages its own
 * scroll-reveal timing independently (see individual components).
 */
export function PlacementsSection() {
  return (
    <Section spacing="lg" surface="muted" containerWidth="wide" aria-labelledby="placements-heading">
      <SectionHeading
        headingId="placements-heading"
        eyebrow={placementsCopy.eyebrow}
        heading={placementsCopy.heading}
        subheading={placementsCopy.subheading}
      />

      <div className="mt-14">
        <KpiGrid />
      </div>

      <div className="mt-8">
        <LazyPlacementChart />
      </div>

      <div className="mt-24">
        <RecruitersWall />
      </div>

      <div className="mt-24">
        <SectionHeading
          eyebrow="Placements 2026"
          heading="Recently Placed Students"
          subheading="Students placed in the 2026 campus recruitment cycle, as featured in the ECA Placement Brochure 2026-27."
        />
        <div className="mt-12">
          <PlacementRosterGrid />
        </div>
      </div>

      <div className="mt-24">
        <PlacementTimeline />
      </div>
    </Section>
  );
}
