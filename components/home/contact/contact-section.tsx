import { contactCopy } from "@/constants/contact";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { ContactMethodCard } from "@/components/home/contact/contact-method-card";
import { MapCard } from "@/components/home/contact/map-card";
import { QuickEnquiryCard } from "@/components/home/contact/quick-enquiry-card";
import { ImportantLinksCard } from "@/components/home/contact/important-links-card";

/**
 * Homepage Contact section: four quick-glance method cards, a map +
 * office-timings panel paired with the Quick Enquiry form, and an
 * Important Links row. Ships with zero added client JavaScript — the
 * map defers via native `loading="lazy"` (see map-card.tsx) and the
 * enquiry form submits via a plain `mailto:` action (see
 * quick-enquiry-card.tsx) rather than a client component.
 */
export function ContactSection() {
  return (
    <Section
      id="contact"
      spacing="lg"
      surface="background"
      containerWidth="wide"
      aria-labelledby="contact-heading"
    >
      <SectionHeading
        headingId="contact-heading"
        eyebrow={contactCopy.eyebrow}
        heading={contactCopy.heading}
        subheading={contactCopy.subheading}
      />

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactCopy.methods.map((method) => (
          <li key={method.id}>
            <ContactMethodCard method={method} />
          </li>
        ))}
      </ul>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <MapCard />
        </div>
        <div className="lg:col-span-2">
          <QuickEnquiryCard />
        </div>
      </div>

      <div className="mt-8">
        <ImportantLinksCard />
      </div>
    </Section>
  );
}
