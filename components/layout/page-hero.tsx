import { Container } from "@/components/layout/container";
import { grainStyle } from "@/lib/decorative";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

/**
 * Solid dark banner used at the top of every inner route (About,
 * Placements, Contact, policy pages, …). The homepage Hero is a full,
 * animated band of its own (see components/home/hero); inner pages don't
 * need that weight, just a consistent, still-premium header so the fixed
 * SiteHeader (which is always solid on non-home routes) has something to
 * sit over without a layout jump.
 *
 * Ships as a plain server component — the entrance is a `motion-safe:`
 * CSS `animate-fade-up` pass staggered with Tailwind's built-in `delay-*`
 * utilities (same pattern already used by CtaSection), not a client
 * component + framer-motion, since this fires once on route load and
 * never needs to react to scroll.
 */
export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-primary pb-10 pt-[calc(var(--header-height)+2.5rem)] text-primary-foreground">
      {/* Background depth — same restrained language as Section's glow/grain,
          scaled down for a shorter static band. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-accent/[0.12] blur-[100px]" />
        <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-white/[0.05] blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.04]" style={grainStyle} />
      </div>

      <Container width="wide" className="relative">
        {eyebrow ? (
          <span className="motion-safe:animate-fade-up inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-accent [animation-fill-mode:backwards]">
            {eyebrow}
          </span>
        ) : null}

        <h1 className="motion-safe:animate-fade-up mt-4 max-w-2xl font-heading text-display-sm font-semibold text-primary-foreground [animation-delay:75ms] [animation-fill-mode:backwards] md:text-display-md">
          {title}
        </h1>
        {description ? (
          <p className="motion-safe:animate-fade-up mt-3 max-w-2xl text-body-lg text-primary-foreground/80 [animation-delay:150ms] [animation-fill-mode:backwards]">
            {description}
          </p>
        ) : null}
      </Container>
    </div>
  );
}
