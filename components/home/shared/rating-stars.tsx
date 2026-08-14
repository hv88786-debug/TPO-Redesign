import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  max?: number;
  className?: string;
}

/**
 * Whole-star rating display. The filled-star count is the only visible
 * signal — the numeric value is exposed to assistive tech via
 * `aria-label` on the wrapper rather than repeated per star, and the
 * five star icons themselves are `aria-hidden` decoration.
 */
export function RatingStars({ rating, max = 5, className }: RatingStarsProps) {
  return (
    <span
      role="img"
      aria-label={`Rated ${rating} out of ${max} stars`}
      className={cn("inline-flex items-center gap-0.5", className)}
    >
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          strokeWidth={1.75}
          className={cn("h-3.5 w-3.5", index < rating ? "fill-accent text-accent" : "fill-none text-border")}
        />
      ))}
    </span>
  );
}
