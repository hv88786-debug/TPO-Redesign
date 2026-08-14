"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Fixed, hand-placed positions for the ambient glow dots — deterministic so
 *  server and client render identically (no Math.random at render time). */
const GLOW_DOTS = [
  { top: "18%", left: "12%", size: 4, delay: 0 },
  { top: "28%", left: "82%", size: 3, delay: 0.6 },
  { top: "12%", left: "55%", size: 3, delay: 1.2 },
  { top: "42%", left: "24%", size: 2, delay: 1.8 },
  { top: "8%", left: "35%", size: 2, delay: 0.3 },
  { top: "34%", left: "68%", size: 4, delay: 0.9 },
  { top: "50%", left: "88%", size: 2, delay: 1.5 },
  { top: "22%", left: "6%", size: 2, delay: 2.1 },
];

/**
 * Layered Hero backdrop, bottom → top:
 *   1. Deep navy sky gradient
 *   2. Real campus photograph (public/images/college/campus-eca-block.jpg —
 *      brochure-verified exterior of the ECA block; the illustrated
 *      <CampusSilhouette /> fallback in campus-silhouette.tsx is now
 *      unused but kept in the repo in case the photo ever needs pulling)
 *   3. Two soft blurred "blobs" that drift slowly — gives the background life
 *      without being flashy
 *   4. A handful of tiny glowing dots that pulse
 *   5. A dark-to-transparent gradient overlay so hero copy on the left stays
 *      readable without crushing the illustration into pure black
 * The whole layer has a very light parallax tied to page scroll.
 */
export function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, prefersReducedMotion ? 0 : 60]);

  return (
    <motion.div className="absolute inset-0 -z-10 overflow-hidden bg-primary" style={{ y: parallaxY }}>
      {/* sky gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(212_60%_10%)_0%,hsl(213_55%_14%)_45%,hsl(215_45%_7%)_100%)]" />

      {/* campus photo — brochure-verified exterior of the ECA block, TP26-27.pdf cover */}
      <div className="absolute inset-0 opacity-90">
        <Image
          src="/images/college/campus-eca-block.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* drifting blobs */}
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-[26rem] w-[26rem] rounded-full bg-accent/20 blur-[110px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 40, -10, 0], y: [0, 20, -20, 0] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-primary-hover/40 blur-[130px]"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, -30, 20, 0], y: [0, -25, 15, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* glowing dots */}
      {GLOW_DOTS.map((dot, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-accent"
          style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          animate={prefersReducedMotion ? undefined : { opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

      {/* premium readability overlay — stronger lower-left, easing off upper-right */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,hsl(215_45%_6%/0.88)_10%,hsl(215_45%_6%/0.55)_40%,hsl(215_45%_6%/0.25)_65%,transparent_90%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(215_45%_6%/0.35)_0%,transparent_30%,hsl(215_45%_6%/0.5)_100%)]" />
    </motion.div>
  );
}
