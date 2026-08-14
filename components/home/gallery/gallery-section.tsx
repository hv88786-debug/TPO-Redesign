import { galleryItems } from "@/constants/gallery";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { GalleryGrid } from "@/components/home/gallery/gallery-grid";

export function GallerySection() {
  return (
    <Section spacing="lg" surface="background" containerWidth="wide" aria-labelledby="gallery-heading">
      <SectionHeading
        headingId="gallery-heading"
        eyebrow="Gallery"
        heading="Placement activities on campus"
        subheading="Recruitment drives, training sessions and events conducted through the year."
      />

      <DemoDataNotice items={galleryItems} className="mx-auto flex" />

      <GalleryGrid />
    </Section>
  );
}
