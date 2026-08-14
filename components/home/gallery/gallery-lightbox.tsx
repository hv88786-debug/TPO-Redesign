"use client";

import { useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight, GraduationCap, ImageOff, Laptop2, Users2, X, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { GalleryItem } from "@/types";
import { formatDate } from "@/lib/utils";

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

interface GalleryLightboxProps {
  items: GalleryItem[];
  openIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/**
 * Full-screen photo viewer built on Radix Dialog, matching the pattern
 * already established by `MobileNav` (AnimatePresence + forceMount, so
 * Framer Motion can animate the exit). Radix supplies the focus trap,
 * Escape-to-close, and focus-return-to-trigger for free; this component
 * only adds ArrowLeft/ArrowRight navigation on top.
 */
export function GalleryLightbox({ items, openIndex, onClose, onNavigate }: GalleryLightboxProps) {
  const open = openIndex !== null;
  const current = openIndex !== null ? items[openIndex] : null;
  const CategoryIcon = current ? CATEGORY_ICON[current.category] : null;

  useEffect(() => {
    if (!open || openIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") onNavigate(Math.min((openIndex ?? 0) + 1, items.length - 1));
      if (event.key === "ArrowLeft") onNavigate(Math.max((openIndex ?? 0) - 1, 0));
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, openIndex, items.length, onNavigate]);

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <AnimatePresence>
        {open && current && openIndex !== null ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[80] bg-primary/70 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount aria-describedby="gallery-lightbox-description">
              <motion.div
                className="fixed inset-0 z-[90] flex flex-col items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
              >
                <Dialog.Title className="sr-only">{current.caption}</Dialog.Title>
                <p id="gallery-lightbox-description" className="sr-only">
                  {current.alt}. {CATEGORY_LABEL[current.category]}, {formatDate(current.date)}.
                </p>

                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close photograph viewer"
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-6 sm:top-6"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </Dialog.Close>

                <div className="relative flex w-full max-w-4xl flex-1 items-center justify-center">
                  <button
                    type="button"
                    onClick={() => onNavigate(Math.max(openIndex - 1, 0))}
                    disabled={openIndex === 0}
                    aria-label="Previous photograph"
                    className="absolute left-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-30 sm:-left-4"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>

                  <div className="relative aspect-[3/2] w-full max-w-3xl overflow-hidden rounded-card bg-black/40">
                    {current.status === "verified" ? (
                      <Image
                        src={current.src}
                        alt={current.alt}
                        fill
                        sizes="90vw"
                        className="object-contain"
                        priority
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-8 text-center text-white/70">
                        <ImageOff className="h-8 w-8" strokeWidth={1.8} aria-hidden="true" />
                        <span className="text-body-sm">Photograph pending upload</span>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate(Math.min(openIndex + 1, items.length - 1))}
                    disabled={openIndex === items.length - 1}
                    aria-label="Next photograph"
                    className="absolute right-0 z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-30 sm:-right-4"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                <div className="mt-4 max-w-2xl text-center text-white">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-caption font-semibold uppercase tracking-wide">
                    {CategoryIcon ? <CategoryIcon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" /> : null}
                    {CATEGORY_LABEL[current.category]}
                  </span>
                  <p className="mt-2 text-body-sm text-white/90">{current.caption}</p>
                  <p className="mt-1 text-caption text-white/60">
                    {formatDate(current.date)} · {openIndex + 1} of {items.length}
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
