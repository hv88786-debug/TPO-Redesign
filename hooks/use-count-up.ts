"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface UseCountUpOptions {
  duration?: number;
  delay?: number;
}

/**
 * Animates a number from 0 → `target` once the returned `ref` scrolls into
 * view. Used by StatCard so each dashboard figure counts up independently
 * instead of the whole hero animating on a single shared timeline.
 *
 * Respects prefers-reduced-motion by snapping straight to the target value.
 */
export function useCountUp(target: number, { duration = 1.6, delay = 0 }: UseCountUpOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, [isInView, target, duration, delay, prefersReducedMotion]);

  return { ref, value };
}
