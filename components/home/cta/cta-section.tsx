import Link from "next/link";
import { Check } from "lucide-react";
import { ctaCopy } from "@/constants/cta";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

/**
 * The homepage's closing band — a full-bleed, dark, premium moment after
 * eight sections of light/muted surfaces, so it reads as a deliberate
 * "we mean it" ending rather than another content card. Ships as a
 * plain server component: the reveal is a single CSS `animate-fade-up`
 * pass on load (`tailwind.config.ts` keyframes, already defined and used
 * nowhere else yet) guarded by `motion-safe:`, rather than pulling in a
 * `"use client"` boundary + framer-motion's `whileInView` machinery for
 * a section that — being the last one on the page — is already close to
 * the viewport for most visitors by the time they'd scroll to it.
 */
export function CtaSection() {
  return (
    <Section
      spacing="lg"
      surface="transparent"
      containerWidth="content"
      aria-labelledby="cta-heading"
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Subtle decorative gradient glows — purely visual, ignored by assistive tech. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-24 h-[24rem] w-[24rem] rounded-full bg-white/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"
      />

      <div className="motion-safe:animate-fade-up relative mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
          {ctaCopy.eyebrow}
        </span>

        <h2
          id="cta-heading"
          className="mt-6 font-heading text-display-md font-semibold tracking-tight text-white md:text-display-lg"
        >
          {ctaCopy.heading}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-body-lg leading-relaxed text-primary-foreground/80">
          {ctaCopy.subheadingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            variant={ctaCopy.primaryCta.variant}
            size="lg"
            className="w-full focus-visible:ring-white focus-visible:ring-offset-transparent sm:w-auto"
          >
            <Link href={ctaCopy.primaryCta.href}>{ctaCopy.primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            variant={ctaCopy.secondaryCta.variant}
            size="lg"
            className="w-full border-white/25 bg-white/5 text-white hover:bg-white/15 focus-visible:ring-white focus-visible:ring-offset-transparent sm:w-auto"
          >
            <Link href={ctaCopy.secondaryCta.href}>{ctaCopy.secondaryCta.label}</Link>
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/15 pt-8">
          {ctaCopy.trustIndicators.map((indicator) => (
            <li key={indicator} className="inline-flex items-center gap-2 text-body-sm text-primary-foreground/85">
              <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
              {indicator}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
