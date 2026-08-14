"use client";

import { motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/constants/testimonials";
import { TestimonialCard } from "@/components/home/testimonials/testimonial-card";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/**
 * Desktop (lg+) layout: three columns with the middle column nudged down,
 * giving the row a staggered, hand-placed rhythm instead of a rigid
 * carousel. Hidden below `lg` in favor of `TestimonialsCarousel`.
 */
export function TestimonialsGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      variants={prefersReducedMotion ? undefined : container}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className="mt-12 hidden grid-cols-3 gap-6 lg:grid"
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} offset={index % 3 === 1} />
      ))}
    </motion.ul>
  );
}
