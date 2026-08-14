"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { galleryItems } from "@/constants/gallery";
import type { GalleryTileSize } from "@/types";
import { GalleryCard } from "@/components/home/gallery/gallery-card";
import { GalleryLightbox } from "@/components/home/gallery/gallery-lightbox";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

/**
 * Repeating size pattern for the asymmetric masonry — cycles every 7
 * tiles regardless of how many gallery items exist, so the layout stays
 * intentional whether the Cell publishes 8 photos or 80. Actual gap
 * filling (so a "large" tile doesn't leave holes next to it) is left to
 * CSS `grid-auto-flow: dense` rather than hand-placed coordinates.
 */
const SIZE_PATTERN: GalleryTileSize[] = ["large", "small", "small", "medium", "small", "medium", "small"];

export function GalleryGrid() {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <motion.ul
        variants={prefersReducedMotion ? undefined : container}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="mt-12 grid grid-cols-2 gap-3 sm:grid-flow-row-dense sm:grid-cols-4 sm:auto-rows-[150px] sm:gap-4 lg:auto-rows-[180px]"
      >
        {galleryItems.map((photo, index) => (
          <GalleryCard
            key={photo.id}
            photo={photo}
            size={SIZE_PATTERN[index % SIZE_PATTERN.length] ?? "small"}
            onOpen={() => setOpenIndex(index)}
          />
        ))}
      </motion.ul>

      <GalleryLightbox
        items={galleryItems}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  );
}
