"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, ClipboardCheck, Compass, Handshake, type LucideIcon } from "lucide-react";
import type { AboutFeature } from "@/types";
import { motion as motionTokens } from "@/constants/theme";

const ICON_MAP: Record<AboutFeature["icon"], LucideIcon> = {
  collaboration: Handshake,
  guidance: Compass,
  internship: Briefcase,
  placement: ClipboardCheck,
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

export function FeatureCard({ feature }: { feature: AboutFeature }) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = ICON_MAP[feature.icon];

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : item}
      whileHover={prefersReducedMotion ? undefined : { y: -5 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease }}
      className="group flex flex-col gap-3 rounded-card border border-border bg-surface p-5 shadow-xs transition-[box-shadow,border-color] duration-300 hover:border-primary/25 hover:shadow-md"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <h3 className="font-heading text-body-lg font-semibold text-text-primary">{feature.title}</h3>
      <p className="text-body-sm leading-relaxed text-text-secondary">{feature.description}</p>
    </motion.li>
  );
}
