"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import type { Testimonial } from "@/types";
import { PersonAvatar } from "@/components/home/shared/person-avatar";
import { RatingStars } from "@/components/home/shared/rating-stars";
import { motion as motionTokens } from "@/constants/theme";
import { cn } from "@/lib/utils";

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  /** Nudges the card down on desktop for the staggered three-column layout. Ignored below lg. */
  offset?: boolean;
  className?: string;
}

/**
 * Conversational "chat bubble" quote card rather than a formal pull-quote
 * block — the speech-bubble tail and left-aligned quote (instead of a
 * centered giant quotation mark) are what make it read as something a
 * real person said, not marketing copy.
 */
export function TestimonialCard({ testimonial, offset = false, className }: TestimonialCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : item}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
      className={cn(
        "flex h-full flex-col rounded-card border border-border bg-surface p-6 shadow-xs transition-[box-shadow,border-color] duration-300 hover:border-primary/20 hover:shadow-lg sm:p-7",
        offset && "lg:mt-10",
        className
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
        <MessageCircle className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
      </span>

      <p className="mt-4 flex-1 text-body-md leading-relaxed text-text-primary">{testimonial.quote}</p>

      <RatingStars rating={testimonial.rating} className="mt-5" />

      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <PersonAvatar photo={testimonial.photo} name={testimonial.name} size="md" />
        <span className="min-w-0">
          <span className="block truncate text-body-sm font-semibold text-text-primary">{testimonial.name}</span>
          <span className="block truncate text-caption text-text-secondary">
            {testimonial.branch} · {testimonial.batch}
            {testimonial.company ? ` · ${testimonial.company}` : ""}
          </span>
        </span>
      </div>
    </motion.li>
  );
}
