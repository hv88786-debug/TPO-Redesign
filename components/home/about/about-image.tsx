"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ImageOff } from "lucide-react";
import type { AboutImage as AboutImageType } from "@/types";
import { motion as motionTokens } from "@/constants/theme";

/**
 * Large campus photograph anchoring the left column of the About split
 * layout. Renders the real photo via next/image once `image.status` is
 * flipped to "verified" (see public/images/ASSET_GUIDE.md); until then it
 * shows a labeled placeholder rather than a broken image, matching the
 * convention already established in GalleryCard.
 */
export function AboutImageCard({ image }: { image: AboutImageType }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: motionTokens.duration.slow, ease: motionTokens.ease }}
      className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
    >
      {/* Decorative floating accents — purely ambient, never carry information. */}
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { y: [0, -14, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-5 -top-7 h-24 w-24 rounded-2xl bg-accent/15 sm:h-32 sm:w-32"
      />
      <motion.div
        aria-hidden="true"
        animate={prefersReducedMotion ? undefined : { y: [0, 12, 0] }}
        transition={prefersReducedMotion ? undefined : { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-primary/10 sm:h-24 sm:w-24"
      />

      <div className="relative aspect-[5/6] w-full overflow-hidden rounded-card border border-border bg-muted shadow-lg">
        {image.status === "verified" ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 42vw, 90vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center text-text-secondary">
            <ImageOff className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
            <span className="text-body-sm">Campus photograph pending upload</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
