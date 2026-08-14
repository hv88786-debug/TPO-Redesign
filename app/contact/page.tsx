import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/page-hero";
import { ContactSection } from "@/components/home/contact/contact-section";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Reach the Training & Placement Cell, Government Engineering College, Ajmer — phone, email, office address, timings and a quick enquiry form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        description="Have a question about placements, training or campus recruitment? Reach the T&P Office directly."
      />
      <ContactSection />
    </>
  );
}
