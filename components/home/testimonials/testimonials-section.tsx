import { testimonials } from "@/constants/testimonials";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { TestimonialsGrid } from "@/components/home/testimonials/testimonials-grid";
import { TestimonialsCarousel } from "@/components/home/testimonials/testimonials-carousel";

export function TestimonialsSection() {
  return (
    <Section spacing="lg" surface="background" containerWidth="wide" aria-labelledby="testimonials-heading">
      <SectionHeading
        headingId="testimonials-heading"
        eyebrow="Student Testimonials"
        heading="In students' own words"
        subheading="Collected from placed students at the close of each placement season, and published only with each student's written consent."
      />

      <DemoDataNotice items={testimonials} className="mx-auto flex" />

      {/* TestimonialsGrid renders lg+ only; TestimonialsCarousel renders below lg. */}
      <TestimonialsGrid />
      <TestimonialsCarousel />
    </Section>
  );
}
