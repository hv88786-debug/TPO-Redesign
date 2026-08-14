"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motion as motionTokens } from "@/constants/theme";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
  headingId?: string;
  /**
   * Document-outline level. Default "h2" is for the one heading that opens
   * a top-level <Section>. Pass "h3" for headings nested inside a section
   * that already has its own h2 (e.g. Recruiters Wall, Timeline inside
   * Placement Statistics) — this also drops the type size a step so the
   * visual hierarchy matches the semantic one instead of every heading in
   * the section reading as equally important.
   */
  as?: "h2" | "h3";
}

const HEADING_SIZE: Record<NonNullable<SectionHeadingProps["as"]>, string> = {
  h2: "text-display-sm md:text-display-md",
  h3: "text-heading-lg md:text-display-sm",
};

/**
 * Shared eyebrow + heading + subheading block used to open each band inside
 * the Placement Statistics section. Reveals once on scroll rather than
 * replaying, so re-scrolling past a section doesn't feel jumpy.
 */
export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
  headingId,
  as = "h2",
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();
  const Heading = as;

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      className={cn("mx-auto max-w-2xl", align === "center" && "text-center", className)}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-accent-ink">
        {eyebrow}
      </span>
      <Heading id={headingId} className={cn("mt-5 font-heading text-text-primary", HEADING_SIZE[as])}>
        {heading}
      </Heading>
      {subheading ? <p className="mt-4 text-body-lg text-text-secondary">{subheading}</p> : null}
    </motion.div>
  );
}
