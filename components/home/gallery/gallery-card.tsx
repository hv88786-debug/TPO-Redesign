"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, GraduationCap, ImageOff, Laptop2, Users2, type LucideIcon } from "lucide-react";
import type { GalleryItem, GalleryTileSize } from "@/types";
import { formatDate, cn } from "@/lib/utils";
import { motion as motionTokens } from "@/constants/theme";

const CATEGORY_ICON: Record<GalleryItem["category"], LucideIcon> = {
  drive: Users2,
  training: GraduationCap,
  internship: Laptop2,
  event: CalendarDays,
};

const CATEGORY_LABEL: Record<GalleryItem["category"], string> = {
  drive: "Recruitment Drive",
  training: "Training",
  internship: "Internship",
  event: "Event",
};

const item = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease },
  },
};

interface GalleryCardProps {
  photo: GalleryItem;
  size: GalleryTileSize;
  onOpen: () => void;
}

const SIZE_SPAN: Record<GalleryTileSize, string> = {
  large: "sm:col-span-2 sm:row-span-2",
  medium: "sm:col-span-2 sm:row-span-1",
  small: "sm:col-span-1 sm:row-span-1",
};

/**
 * One masonry tile. It's a real `<button>` (not a `<div onClick>`) so the
 * whole tile is keyboard-focusable and activatable with Enter/Space,
 * which is what makes the gallery keyboard accessible end to end —
 * `GalleryLightbox` picks up from here with its own focus trap.
 */
export function GalleryCard({ photo, size, onOpen }: GalleryCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const CategoryIcon = CATEGORY_ICON[photo.category];

  return (
    <motion.li
      variants={prefersReducedMotion ? undefined : item}
      className={cn("group relative aspect-[4/3] overflow-hidden rounded-card sm:aspect-auto", SIZE_SPAN[size])}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open photograph: ${photo.caption} — ${CATEGORY_LABEL[photo.category]}, ${formatDate(photo.date)}`}
        className="relative block h-full w-full overflow-hidden rounded-card border border-border bg-muted text-left transition-[border-color,transform] duration-300 ease-brand hover:border-accent/30 active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {photo.status === "verified" ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 50vw"
            className="object-cover transition-transform duration-500 ease-brand group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-text-secondary">
            <ImageOff className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
            <span className="px-4 text-center text-caption">Photograph pending upload</span>
          </div>
        )}

        {/* Caption / date / category overlay — always partly visible via the gradient scrim, full detail fades in on hover/focus. */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-3.5 pt-10 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            <CategoryIcon className="h-3 w-3 shrink-0" strokeWidth={2.2} />
            {CATEGORY_LABEL[photo.category]}
          </span>
          <span className="mt-1.5 block truncate text-caption font-medium text-white">{photo.caption}</span>
          <span className="mt-0.5 block text-[0.65rem] text-white/70">{formatDate(photo.date)}</span>
        </span>
      </button>
    </motion.li>
  );
}
