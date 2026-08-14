"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "lucide-react";
import { heroCopy } from "@/constants/hero";
import { motion as motionTokens } from "@/constants/theme";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  // Deliberately slower than the shared 0.5s "slow" reveal — this is the
  // Hero's one signature, unhurried entrance. Duration stays custom on
  // purpose; the curve still comes from the shared token.
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: motionTokens.ease } },
};

export function HeroContent() {
  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="max-w-xl">
      <motion.div
        variants={item}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
      >
        <Sparkle className="h-3.5 w-3.5 text-accent" strokeWidth={2.5} aria-hidden="true" />
        <span className="text-caption font-semibold uppercase tracking-[0.14em] text-white/85">
          {heroCopy.eyebrow}
        </span>
      </motion.div>

      <motion.h1 variants={item} className="mt-6 text-display-md font-heading text-white md:text-display-lg">
        {heroCopy.headingPrimary}
        <span className="mt-2 block text-heading-md font-medium text-white/75 md:text-heading-lg">
          {heroCopy.headingSecondary}
        </span>
      </motion.h1>

      <motion.p variants={item} className="mt-6 max-w-lg text-body-lg text-white/80">
        {heroCopy.subheading}
      </motion.p>

      <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          asChild
          variant="accent"
          size="lg"
          className="group focus-visible:ring-white focus-visible:ring-offset-transparent"
        >
          <Link href={heroCopy.primaryCta.href}>
            {heroCopy.primaryCta.label}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-white/25 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white focus-visible:ring-white focus-visible:ring-offset-transparent"
        >
          <Link href={heroCopy.secondaryCta.href}>{heroCopy.secondaryCta.label}</Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
