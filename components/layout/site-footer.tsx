import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { footerColumns, footerLegalLinks } from "@/constants/footer";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/ui/logo";

const socialLinks = [
  { key: "linkedin", href: siteConfig.socials.linkedin, label: "LinkedIn", icon: Linkedin },
  { key: "twitter", href: siteConfig.socials.twitter, label: "Twitter", icon: Twitter },
  { key: "facebook", href: siteConfig.socials.facebook, label: "Facebook", icon: Facebook },
].filter((social): social is typeof social & { href: string } => Boolean(social.href));

/**
 * Premium multi-column footer — replaces the Sprint-1 structural
 * placeholder (brand + one flat link list) referenced in
 * `site-header.tsx`'s equivalent note. Plain server component, no
 * interactivity beyond ordinary links, so it adds nothing to the
 * client bundle.
 *
 * Layout: a brand block (logo, description, socials) beside a
 * Contact block, followed by the four link columns from
 * `constants/footer.ts`, closed by a legal/copyright bar.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <Container width="wide" className="grid grid-cols-1 gap-12 py-section-sm sm:grid-cols-2 lg:grid-cols-6">
        {/* Brand block — spans 2 columns on desktop so it reads as the anchor, not a sixth equal column. */}
        <div className="sm:col-span-2 lg:col-span-2">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-body-sm leading-relaxed text-primary-foreground/75">
            {siteConfig.description}
          </p>

          {socialLinks.length > 0 ? (
            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ key, href, label, icon: Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.shortName} on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-accent/40 hover:bg-accent/15 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="text-body-sm font-semibold text-white">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-body-sm text-primary-foreground/75 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Contact block — plain info, not a nav landmark. */}
        <div>
          <p className="text-body-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-start gap-2.5 text-body-sm text-primary-foreground/75 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-2.5 text-body-sm text-primary-foreground/75 transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <address className="flex items-start gap-2.5 text-body-sm not-italic text-primary-foreground/75">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                {siteConfig.contact.address}
              </address>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-primary-foreground/15">
        <Container
          width="wide"
          className="flex flex-col items-center gap-3 py-6 text-center sm:flex-row sm:justify-between sm:text-left"
        >
          <p className="text-caption text-primary-foreground/70">
            © {year} {siteConfig.institute}. All rights reserved.
            <span className="block sm:inline sm:before:mx-2 sm:before:content-['·']">
              Designed with ❤️ by Training &amp; Placement Cell
            </span>
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5">
            {footerLegalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-caption text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
