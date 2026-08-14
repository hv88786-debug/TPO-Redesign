import { ExternalLink } from "lucide-react";
import { contactCopy } from "@/constants/contact";
import { siteConfig } from "@/constants/site";
import { DemoDataNotice } from "@/components/home/shared/demo-data-notice";

/**
 * Map + Office Timings panel. The map iframe uses the browser's native
 * `loading="lazy"` attribute rather than a client-side IntersectionObserver
 * or a click-to-load facade — it defers the request until the panel nears
 * the viewport with zero JavaScript, which is the cheapest way to satisfy
 * "lazy load the map" for a card this far down the page. No Maps API key
 * is required: `output=embed` is Google's key-free embed mode.
 */
export function MapCard() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-xs">
      <div className="aspect-[16/10] w-full bg-muted">
        <iframe
          src={contactCopy.mapEmbedSrc}
          title={`Map showing the location of ${siteConfig.institute}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="flex items-start justify-between gap-3">
          <address className="not-italic text-body-sm leading-relaxed text-text-secondary">
            {siteConfig.contact.address}
          </address>
          <a
            href={contactCopy.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-caption font-semibold text-primary hover:underline"
          >
            Get Directions
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
          </a>
        </div>

        <div className="border-t border-border pt-5">
          <h3 className="text-body-sm font-semibold text-text-primary">Office Timings</h3>
          <DemoDataNotice items={contactCopy.officeHours} className="mt-2" />
          <dl className="mt-3 space-y-2">
            {contactCopy.officeHours.map((row) => (
              <div key={row.days} className="flex items-center justify-between gap-4 text-body-sm">
                <dt className="text-text-secondary">{row.days}</dt>
                <dd className="font-medium text-text-primary">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
