import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { GallerySection } from "@/components/home/gallery/gallery-section";

export const metadata: Metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos from recruitment drives, training sessions and placement events at the Government Engineering College, Ajmer Training & Placement Cell.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Placement Activities on Campus"
        description="Recruitment drives, training sessions and events conducted through the year."
      />
      <GallerySection />
    </>
  );
}
