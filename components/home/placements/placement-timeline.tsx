"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, GraduationCap, MessagesSquare, Trophy, Wrench, type LucideIcon } from "lucide-react";
import { journeySteps } from "@/constants/placements";
import { motion as motionTokens } from "@/constants/theme";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { cn } from "@/lib/utils";
import type { JourneyStep } from "@/types";

const ICONS: Record<JourneyStep["icon"], LucideIcon> = {
  year: GraduationCap,
  training: BookOpen,
  internship: Wrench,
  interview: MessagesSquare,
  placement: Trophy,
};

// Must match the ol's gap utilities below (md:gap-6 -> 1.5rem, gap-10 -> 2.5rem).
// Each connector spans "one column/row + one gap" so it lands exactly on the
// next icon's center, instead of approximating with a single full-width
// overlay that drifts out of alignment as columns become unequal.
const DESKTOP_GAP = "1.5rem";
const MOBILE_GAP = "2.5rem";

/**
 * "Student Journey" - five-stage timeline. Each step owns its own connector
 * segment (to the next step only), anchored to its own icon's center via
 * left-1/2 (desktop) / top-12 (mobile) - so alignment holds even if column
 * widths end up unequal, rather than relying on one overlay line spanning
 * the whole row. Segments draw in with a stagger timed just behind each
 * icon's own reveal, so the line visually "arrives" at each node in turn.
 */
export function PlacementTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <SectionHeading
        as="h3"
        eyebrow="Placement Timeline"
        heading="The student journey"
        subheading="A structured, four-year runway — every stage is designed to compound into placement-day readiness."
      />

      <div className="mt-16">
        <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6">
          {journeySteps.map((step, index) => {
            const Icon = ICONS[step.icon];
            const isLast = index === journeySteps.length - 1;

            return (
              <motion.li
                key={step.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                transition={{ duration: 0.6, delay: 0.15 * index, ease: motionTokens.ease }}
                className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center"
              >
                {!isLast ? (
                  <>
                    {/* Desktop: horizontal segment, this icon's center -> next icon's center */}
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-6 hidden h-px -translate-y-1/2 bg-border md:block"
                      style={{ width: `calc(100% + ${DESKTOP_GAP})` }}
                    >
                      <motion.span
                        initial={prefersReducedMotion ? false : { scaleX: 0 }}
                        whileInView={prefersReducedMotion ? undefined : { scaleX: 1 }}
                        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                        transition={{ duration: 0.7, delay: 0.15 * index + 0.25, ease: motionTokens.ease }}
                        className="block h-full w-full origin-left bg-gradient-to-r from-primary to-accent"
                      />
                    </span>

                    {/* Mobile: vertical segment, this icon's bottom -> next icon's top */}
                    <span
                      aria-hidden="true"
                      className="absolute left-6 top-12 w-px -translate-x-1/2 bg-border md:hidden"
                      style={{ bottom: `calc(-1 * ${MOBILE_GAP})` }}
                    >
                      <motion.span
                        initial={prefersReducedMotion ? false : { scaleY: 0 }}
                        whileInView={prefersReducedMotion ? undefined : { scaleY: 1 }}
                        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
                        transition={{ duration: 0.7, delay: 0.15 * index + 0.25, ease: motionTokens.ease }}
                        className="block h-full w-full origin-top bg-gradient-to-b from-primary to-accent"
                      />
                    </span>
                  </>
                ) : null}

                <span
                  className={cn(
                    "relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md ring-4 ring-muted transition-transform duration-300",
                    isLast ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                </span>

                <div className="pt-1 md:pt-4">
                  <p className="text-caption font-semibold uppercase tracking-[0.1em] text-accent-ink">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 font-heading text-heading-sm font-semibold text-text-primary">{step.label}</p>
                  <p className="mt-1.5 text-body-sm text-text-secondary md:max-w-[15rem]">{step.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
