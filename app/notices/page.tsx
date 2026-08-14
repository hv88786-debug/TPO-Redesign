import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { notices } from "@/constants/notices";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { NoticesGrid } from "@/components/home/notices/notices-grid";

export const metadata: Metadata = buildMetadata({
  title: "Notices & Circulars",
  description: "All notices, circulars and drive announcements issued by the Training & Placement Cell, GEC Ajmer.",
  path: "/notices",
});

export default function NoticesPage() {
  return (
    <>
      <PageHero
        eyebrow="Notices & Circulars"
        title="All Notices"
        description="Every circular and drive announcement issued by the T&P Office, most recent first."
      />
      <Section spacing="lg" surface="background" containerWidth="wide">
        <DemoDataNotice items={notices} className="mx-auto flex" />
        <NoticesGrid notices={notices} />
      </Section>
    </>
  );
}
