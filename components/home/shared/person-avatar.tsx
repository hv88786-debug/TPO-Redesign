import Image from "next/image";
import type { PersonPhoto } from "@/types";
import { cn, getInitials } from "@/lib/utils";

interface PersonAvatarProps {
  photo: PersonPhoto;
  name: string;
  size?: "md" | "lg";
  className?: string;
}

const SIZE_STYLE: Record<NonNullable<PersonAvatarProps["size"]>, string> = {
  md: "h-14 w-14 text-body-md",
  lg: "h-20 w-20 text-heading-sm",
};

/**
 * Student photo slot shared by Success Story and Testimonial cards.
 * Renders the real photograph only once `photo.status` is "verified" —
 * same placeholder-over-broken-image convention as `GalleryCard` and
 * `AboutImageCard` — otherwise falls back to a monogram badge rather
 * than a generic "image missing" icon, since this slot represents a
 * face rather than an event photograph.
 */
export function PersonAvatar({ photo, name, size = "md", className }: PersonAvatarProps) {
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-surface bg-gradient-to-br from-primary/15 to-accent/20 font-heading font-semibold text-primary shadow-sm ring-1 ring-border",
        SIZE_STYLE[size],
        className
      )}
    >
      {photo.status === "verified" ? (
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={size === "lg" ? "80px" : "56px"}
          className="object-cover"
        />
      ) : (
        <span aria-hidden="true">{getInitials(name)}</span>
      )}
    </span>
  );
}
