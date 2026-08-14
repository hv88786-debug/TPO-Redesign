import { HeroSection } from "@/components/home/hero/hero-section";
import { OverviewLinksGrid } from "@/components/home/overview/overview-links-grid";
import { NoticesSection } from "@/components/home/notices/notices-section";
import { CtaSection } from "@/components/home/cta/cta-section";

/**
 * Homepage = Hero + a quick-links overview grid + latest notices + final
 * CTA. Every other section (About, Placements, Training, Success Stories,
 * Testimonials, Gallery, FAQ, Contact) used to be stacked here as one long
 * page — each now lives on its own route under app/*\/page.tsx, and
 * OverviewLinksGrid is what surfaces all of them from the homepage. See
 * constants/overview-links.ts for that link data.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewLinksGrid />
      <NoticesSection />
      <CtaSection />
    </>
  );
}
