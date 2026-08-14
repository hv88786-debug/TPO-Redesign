import { notices } from "@/constants/notices";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { NoticesGrid } from "@/components/home/notices/notices-grid";
import { Button } from "@/components/ui/button";

/**
 * "Notices & Circulars" — the most recent items from constants/notices.ts,
 * rendered as announcement cards (see notice-card.tsx) rather than a flat
 * list/table. Pure presentation: this component owns no copy of its own
 * beyond the "View all notices" link label, everything else is read from
 * constants.
 */
export function NoticesSection() {
  const latest = notices.slice(0, 6);
  const mostRecent = latest[0]?.date
    ? new Date(`${latest[0].date}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <Section spacing="lg" surface="background" containerWidth="wide" aria-labelledby="notices-heading">
      <SectionHeading
        headingId="notices-heading"
        eyebrow="Notices & Circulars"
        heading="Latest from the Placement Cell"
        subheading="Circulars, drive announcements and deadlines as issued by the Training & Placement Office."
      />

      {mostRecent ? (
        <p className="mx-auto mt-3 max-w-2xl text-center text-caption text-text-secondary">
          Board last updated {mostRecent}. Notices are posted here the same day they are issued at the physical
          T&P Office notice board.
        </p>
      ) : null}

      <DemoDataNotice items={latest} className="mx-auto flex" />

      <NoticesGrid notices={latest} />

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline">
          <a href="/notices">View all notices</a>
        </Button>
      </div>
    </Section>
  );
}
