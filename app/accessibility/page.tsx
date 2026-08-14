import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/constants/site";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "The accessibility commitment of the Training & Placement Cell, GEC Ajmer, website.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" />
      <Section spacing="lg" surface="background" containerWidth="narrow">
        <div className="max-w-none text-body-md leading-relaxed text-text-secondary [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:first:mt-0 [&_p]:mt-4 [&_p]:first:mt-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-primary [&_a]:underline-offset-2 hover:[&_a]:underline">
          <p>
            This website is built with semantic HTML, keyboard-navigable menus and forms, visible focus states, and
            respects your device&apos;s reduced-motion setting for animated sections.
          </p>
          <p>
            If you encounter a page or feature that is difficult to use with a screen reader, keyboard, or other
            assistive technology, please let the T&P Office know at{" "}
            <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> so it can be fixed.
          </p>
        </div>
      </Section>
    </>
  );
}
