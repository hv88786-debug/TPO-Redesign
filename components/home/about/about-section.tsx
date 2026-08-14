import { aboutCopy } from "@/constants/about";
import { Section } from "@/components/layout/section";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { AboutImageCard } from "@/components/home/about/about-image";
import { AboutCopyBlock } from "@/components/home/about/about-copy";
import { FeatureGrid } from "@/components/home/about/feature-grid";
import { AccreditationStrip } from "@/components/home/about/accreditation-strip";
import { TeamGrid } from "@/components/home/about/team-grid";

/**
 * "About Training & Placement Cell" — the section that opens the homepage
 * body proper, right after the Hero. Elegant split layout: campus
 * photograph on the left, eyebrow/heading/body copy on the right, with
 * four capability cards beneath the copy. Server component by default —
 * the interactive/animated pieces (image reveal, copy reveal, staggered
 * feature grid) are isolated in their own client components.
 */
export function AboutSection() {
  return (
    <Section spacing="lg" surface="background" containerWidth="wide" aria-labelledby="about-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <AboutImageCard image={aboutCopy.image} />

        <div>
          <AboutCopyBlock copy={aboutCopy} headingId="about-heading" />
          <DemoDataNotice items={[aboutCopy.image]} className="mt-5 inline-flex" />
          <AccreditationStrip />
        </div>
      </div>

      <FeatureGrid />
      <TeamGrid />
    </Section>
  );
}
