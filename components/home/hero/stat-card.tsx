"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Award, Briefcase, IndianRupee, Percent, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { motion as motionTokens } from "@/constants/theme";
import type { StatItem } from "@/types";
import { cn } from "@/lib/utils";

type IconKey = "offers" | "package" | "recruiters" | "rate" | "internships" | "average";

const ICONS: Record<IconKey, LucideIcon> = {
  offers: Award,
  package: IndianRupee,
  recruiters: Users,
  rate: Percent,
  internships: Briefcase,
  average: TrendingUp,
};

interface StatCardProps {
  stat: StatItem & { icon: IconKey };
  /** Stagger/entrance index — also seeds the independent float timing. */
  index: number;
  className?: string;
}

export function StatCard({ stat, index, className }: StatCardProps) {
  const { ref, value } = useCountUp(stat.value, { duration: 1.5, delay: 0.15 * index });
  const prefersReducedMotion = useReducedMotion();
  const Icon = ICONS[stat.icon];

  const displayValue = stat.decimals ? value.toFixed(stat.decimals) : Math.round(value).toLocaleString("en-IN");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: motionTokens.duration.pop, delay: 0.7 + index * 0.1, ease: motionTokens.ease }}
      className={cn("group", className)}
    >
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, index % 2 === 0 ? -10 : -6, 0] }
        }
        transition={{
          duration: 4.5 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.35,
        }}
        whileHover={prefersReducedMotion ? undefined : { y: -6, scale: 1.03 }}
        className="flex items-center gap-3.5 rounded-card border border-white/15 bg-white/[0.08] p-4 shadow-lg backdrop-blur-xl transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-accent/10 sm:p-5"
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
          <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <span className="flex flex-col">
          <span className="font-heading text-heading-md font-semibold text-white tabular-nums">
            {stat.prefix}
            {displayValue}
            {stat.suffix}
          </span>
          <span className="text-caption font-medium text-white/75">{stat.label}</span>
        </span>
      </motion.div>
    </motion.div>
  );
}
