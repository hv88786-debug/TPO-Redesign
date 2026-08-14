"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Briefcase,
  IndianRupee,
  Minus,
  Percent,
  TrendingDown,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";
import { motion as motionTokens } from "@/constants/theme";
import type { KpiItem } from "@/types";
import { cn } from "@/lib/utils";

const ICONS: Record<KpiItem["icon"], LucideIcon> = {
  offers: Award,
  package: IndianRupee,
  recruiters: Users,
  rate: Percent,
  internships: Briefcase,
  average: TrendingUp,
};

const TREND_ICONS = {
  up: TrendingUp,
  down: TrendingDown,
  flat: Minus,
} as const;

const TREND_STYLES = {
  up: "bg-success/10 text-success",
  down: "bg-destructive/10 text-destructive",
  flat: "bg-muted text-text-secondary",
} as const;

interface KpiCardProps {
  kpi: KpiItem;
  index: number;
}

export function KpiCard({ kpi, index }: KpiCardProps) {
  const { ref, value } = useCountUp(kpi.value, { duration: 1.6, delay: 0.1 * index });
  const prefersReducedMotion = useReducedMotion();

  const Icon = ICONS[kpi.icon];
  const TrendIcon = TREND_ICONS[kpi.trend.direction];
  const displayValue = kpi.decimals ? value.toFixed(kpi.decimals) : Math.round(value).toLocaleString("en-IN");

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: motionTokens.duration.pop, delay: 0.08 * index, ease: motionTokens.ease }}
      whileHover={prefersReducedMotion ? undefined : { y: -6 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      className="group relative overflow-hidden rounded-card border border-border bg-surface p-6 shadow-sm transition-[box-shadow,border-color] duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.06] focus-within:shadow-xl"
    >
      {/* Accent wash that sweeps in on hover — sits behind all content */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 origin-top-left scale-90 rounded-card bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.06] opacity-0 transition-all duration-500 ease-brand group-hover:scale-100 group-hover:opacity-100"
      />

      <div className="relative z-[1] flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-brand group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </span>

        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-caption font-semibold",
            TREND_STYLES[kpi.trend.direction]
          )}
        >
          <TrendIcon className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
          {kpi.trend.label}
        </span>
      </div>

      <p className="relative z-[1] mt-5 font-heading text-display-sm font-semibold tabular-nums text-text-primary">
        {kpi.prefix}
        {displayValue}
        {kpi.suffix}
      </p>
      <p className="relative z-[1] mt-1.5 text-body-md font-semibold text-text-primary">{kpi.label}</p>
      <p className="relative z-[1] mt-1 text-body-sm text-text-secondary">{kpi.supportingText}</p>
    </motion.div>
  );
}
