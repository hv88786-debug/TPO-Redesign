import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { ContactMethod, ContactMethodIcon } from "@/types";
import { cn } from "@/lib/utils";

const METHOD_ICON: Record<ContactMethodIcon, LucideIcon> = {
  phone: Phone,
  email: Mail,
  office: MapPin,
  hours: Clock,
};

interface ContactMethodCardProps {
  method: ContactMethod;
}

/**
 * One of the four quick-glance contact cards. Renders as an `<a>` when
 * `href` is present (the whole card is the tap target — better mobile
 * ergonomics than a small "Call now" link buried inside it) and a plain
 * `<div>` otherwise (Working Hours has nothing to link to at this
 * card's level; the full breakdown lives in the Office Timings table).
 */
export function ContactMethodCard({ method }: ContactMethodCardProps) {
  const Icon = METHOD_ICON[method.icon];
  const isExternal = method.href?.startsWith("http");

  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-caption font-semibold uppercase tracking-wide text-text-secondary">{method.label}</p>
        <p className="mt-1 break-words text-body-sm font-medium leading-snug text-text-primary">{method.value}</p>
        {method.href && method.actionLabel ? (
          <span className="mt-2 inline-flex items-center text-caption font-semibold text-primary group-hover:underline">
            {method.actionLabel}
          </span>
        ) : null}
      </div>
    </>
  );

  const className = cn(
    "group flex h-full items-start gap-4 rounded-card border border-border bg-surface p-5 shadow-xs transition-all duration-300 ease-brand",
    method.href && "hover:-translate-y-1 hover:border-primary/25 hover:shadow-md"
  );

  if (method.href) {
    return (
      <a
        href={method.href}
        className={className}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={`${method.label}: ${method.value}${method.actionLabel ? ` — ${method.actionLabel}` : ""}`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
