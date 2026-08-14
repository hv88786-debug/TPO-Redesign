"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/constants/testimonials";
import { TestimonialCard } from "@/components/home/testimonials/testimonial-card";
import { cn } from "@/lib/utils";

/**
 * Below `lg`: a horizontal scroll-snap swipe carousel (touch swipe works
 * natively via CSS `scroll-snap`, no gesture library needed). Active
 * slide is tracked with one `IntersectionObserver` watching every slide
 * at a 50% threshold, which drives both the dot indicators and the
 * prev/next buttons' `aria-label`s — keeping mouse, touch, and keyboard
 * navigation all reading from (and writing to) the same scroll position
 * instead of duplicating index state.
 */
export function TestimonialsCarousel() {
  const trackRef = useRef<HTMLUListElement>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        );
        if (mostVisible.intersectionRatio > 0.5) {
          const index = slideRefs.current.findIndex((slide) => slide === mostVisible.target);
          if (index !== -1) setActiveIndex(index);
        }
      },
      { root: track, threshold: [0.5, 0.75, 1] }
    );

    slideRefs.current.forEach((slide) => slide && observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  function scrollToIndex(index: number) {
    const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="mt-12 lg:hidden">
      <ul
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Student testimonials"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${testimonials.length}`}
            className="w-[86%] shrink-0 snap-center xs:w-[75%] sm:w-[60%]"
          >
            <TestimonialCard testimonial={testimonial} className="h-full" />
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous testimonial"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/40"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollToIndex(activeIndex + 1)}
          disabled={activeIndex === testimonials.length - 1}
          aria-label="Next testimonial"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text-primary transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
        >
          <ChevronRight className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
