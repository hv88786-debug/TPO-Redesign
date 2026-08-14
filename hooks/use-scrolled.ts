"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has been scrolled past `threshold` pixels.
 * Used by SiteHeader to switch from a transparent, overlaid nav (sitting on
 * top of the Hero) to a solid, blurred nav once the Hero has scrolled by.
 */
export function useScrolled(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
