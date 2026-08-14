"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutFeatures } from "@/constants/about";
import { FeatureCard } from "@/components/home/about/feature-card";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export function FeatureGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.ul
      variants={prefersReducedMotion ? undefined : container}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
    >
      {aboutFeatures.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </motion.ul>
  );
}
