import { HeroBackground } from "@/components/home/hero/hero-background";
import { HeroContent } from "@/components/home/hero/hero-content";
import { HeroDashboard } from "@/components/home/hero/hero-dashboard";
import { ScrollIndicator } from "@/components/home/hero/scroll-indicator";
import { TrustedCompanies } from "@/components/home/hero/trusted-companies";
import { Container } from "@/components/layout/container";

/**
 * The homepage Hero. Per the build brief this is the ONLY homepage section
 * shipped alongside the Navbar in this pass — every other section
 * (About, PlacementStats, Recruiters grid, Notices…) stays a build-phase
 * task, same as components/home/README.md already states.
 */
export function HeroSection() {
  return (
    <>
      <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden">
        <HeroBackground />

        <Container
          width="wide"
          className="grid w-full items-center gap-16 pb-24 pt-[calc(var(--header-height)+2.5rem)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:pb-16"
        >
          <HeroContent />
          <HeroDashboard />
        </Container>

        <ScrollIndicator />
      </section>

      <TrustedCompanies />
    </>
  );
}
