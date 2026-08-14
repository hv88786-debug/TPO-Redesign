"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AboutCopy as AboutCopyType } from "@/types";
import { motion as motionTokens } from "@/constants/theme";

export function AboutCopyBlock({ copy, headingId }: { copy: AboutCopyType; headingId: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-1.5 text-caption font-semibold uppercase tracking-[0.14em] text-accent-ink">
        {copy.eyebrow}
      </span>

      <h2 id={headingId} className="mt-5 font-heading text-display-sm text-text-primary md:text-display-md">
        {copy.heading}
      </h2>

      <div className="mt-5 space-y-4">
        {copy.body.map((paragraph, index) => (
          <p key={index} className="text-body-md leading-relaxed text-text-secondary">
            {paragraph}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
