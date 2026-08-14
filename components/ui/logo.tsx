import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/constants/site";

interface LogoProps {
  /**
   * "light"  — white wordmark, used while the header sits transparently
   *            over the dark Hero.
   * "dark"   — navy wordmark, used once the header turns solid on scroll.
   */
  variant?: "light" | "dark";
  className?: string;
}

/**
 * College emblem + T&P Cell wordmark. Uses the official TPO crest
 * (public/images/tpo-logo.png) — a circular black badge with a white/orange
 * "TPO" mark — which already reads clearly on both the transparent/dark
 * header and the solid/light one, so no separate light/dark asset swap is
 * needed for the badge itself, only for the wordmark text beside it.
 */
export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm ring-1 ring-black/10"
        aria-hidden="true"
      >
        <Image src="/images/tpo-logo.png" alt="" fill sizes="44px" className="object-cover" priority />
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span
          className={cn(
            "whitespace-nowrap font-heading text-body-sm font-semibold tracking-tight sm:text-heading-sm",
            isLight ? "text-white" : "text-text-primary"
          )}
        >
          {siteConfig.name}
        </span>
        <span
          className={cn(
            "hidden whitespace-nowrap text-[0.7rem] font-medium tracking-wide md:block",
            isLight ? "text-white/75" : "text-text-secondary"
          )}
        >
          {siteConfig.institute}
        </span>
      </span>
      {/* Compact wordmark for narrow viewports where the full name won't fit next to the badge without wrapping. */}
      <span
        className={cn(
          "font-heading text-body-md font-semibold tracking-tight sm:hidden",
          isLight ? "text-white" : "text-text-primary"
        )}
      >
        T&amp;P Cell
      </span>
    </div>
  );
}
