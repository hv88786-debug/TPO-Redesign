"use client";

import { motion } from "framer-motion";
import { heroStats } from "@/constants/hero";
import { StatCard } from "@/components/home/hero/stat-card";

/**
 * Alternating vertical offsets on lg+ give the grid a "floating dashboard"
 * feel instead of a flat table of cards, while staying a normal document-
 * flow grid (no absolute positioning) so it never breaks on any viewport.
 */
const OFFSET_CLASS = ["lg:mt-0", "lg:mt-10", "lg:mt-16", "lg:mt-2"];

export function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
    >
      <div className="grid grid-cols-2 gap-3.5 sm:gap-4 lg:gap-5">
        {heroStats.map((stat, index) => (
          <StatCard key={stat.id} stat={stat} index={index} className={OFFSET_CLASS[index]} />
        ))}
      </div>
    </motion.div>
  );
}
