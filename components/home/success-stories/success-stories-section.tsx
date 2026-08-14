"use client";

import { motion, useReducedMotion } from "framer-motion";
import { successStories } from "@/constants/success-stories";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/home/shared/section-heading";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";
import { SuccessStoryCard } from "@/components/home/success-stories/success-story-card";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/**
 * Cards reveal in sequence as the grid scrolls into view — each card's
 * `item` variant (see success-story-card.tsx) fires `staggerChildren`
 * later than the last, giving the section its "timeline" reveal rhythm
 * without a literal connector-line timeline motif.
 */
export function SuccessStoriesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section spacing="lg" surface="muted" containerWidth="wide" aria-labelledby="success-stories-heading">
      <SectionHeading
        headingId="success-stories-heading"
        eyebrow="Success Stories"
        heading="Where our students are placed"
        subheading="A sample of placements from recent batches, verified against the offer letter on file and published only with each student's written consent."
      />

      <DemoDataNotice items={successStories} className="mx-auto flex" />

      <motion.ul
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {successStories.map((story) => (
          <SuccessStoryCard key={story.id} story={story} />
        ))}
      </motion.ul>
    </Section>
  );
}
