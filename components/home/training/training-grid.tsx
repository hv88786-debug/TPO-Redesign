"use client";

import { motion, useReducedMotion } from "framer-motion";
import { trainingPrograms } from "@/constants/training";
import { TrainingCard } from "@/components/home/training/training-card";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/**
 * Two-column staggered layout on desktop (odd cards sit lower, giving the
 * grid a vertical rhythm instead of a flat timeline), collapsing to a
 * single column on mobile. Cards reveal once as a group when the grid
 * scrolls into view.
 */
export function TrainingGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      variants={prefersReducedMotion ? undefined : container}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6"
    >
      {trainingPrograms.map((program, index) => (
        <TrainingCard key={program.id} program={program} offset={index % 2 === 1} />
      ))}
    </motion.ul>
  );
}
