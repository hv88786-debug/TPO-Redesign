import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { QuickEnquiryCard } from "@/components/home/contact/quick-enquiry-card";

export const metadata: Metadata = buildMetadata({
  title: "Apply for Placement Cycle",
  description: "Register with the Training & Placement Cell, GEC Ajmer, for the current campus placement cycle.",
  path: "/apply",
});

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Registration"
        title="Apply for the Placement Cycle"
        description="Download and submit the registration form, or send your details directly to the T&P Office below."
      />

      <Section spacing="lg" surface="background" containerWidth="content">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-heading-lg font-semibold text-text-primary">How to register</h2>
            <ol className="mt-4 space-y-3 text-body-sm text-text-secondary">
              <li>1. Download the registration form from the Downloads page.</li>
              <li>2. Fill in your branch, CGPA and contact details.</li>
              <li>3. Submit the filled form to the T&P Office, or email it directly.</li>
              <li>4. Watch the Notices page for your eligibility confirmation and drive schedule.</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link href="/downloads">Get Registration Form</Link>
              </Button>
              <Button asChild variant="ghost">
                <a href={`mailto:${siteConfig.contact.email}?subject=Placement%20Registration`}>Email T&P Office</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-3">
            <QuickEnquiryCard />
          </div>
        </div>
      </Section>
    </>
  );
}
