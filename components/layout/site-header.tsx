"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { primaryNav } from "@/constants/nav";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useScrolled } from "@/hooks/use-scrolled";
import { motion as motionTokens } from "@/constants/theme";
import { cn } from "@/lib/utils";

const headerVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: motionTokens.duration.pop, ease: motionTokens.ease } },
};

const navListVariants = {
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
};

const navItemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: motionTokens.duration.base, ease: motionTokens.ease } },
};

/**
 * Sticky primary navigation. Renders transparent over the dark Hero on
 * initial load, then crossfades to a solid, blurred surface once the page
 * scrolls past the Hero — the classic Apple/Stripe "overlay nav" pattern.
 */
export function SiteHeader() {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-body-sm focus:font-medium focus:text-accent-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>

      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-border bg-surface/85 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-[--header-height] items-center justify-between">
          <Link
            href="/"
            className={cn(
              "rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              scrolled ? "focus-visible:ring-ring focus-visible:ring-offset-surface" : "focus-visible:ring-white focus-visible:ring-offset-transparent"
            )}
            aria-label="Training & Placement Cell — Home"
          >
            <Logo variant={scrolled ? "dark" : "light"} />
          </Link>

          <motion.nav
            aria-label="Primary"
            variants={navListVariants}
            initial="hidden"
            animate="visible"
            className="hidden items-center gap-1 lg:flex"
          >
            {primaryNav.map((item) => (
              <motion.div key={item.href} variants={navItemVariants}>
                <Link
                  href={item.href}
                  className={cn(
                    "group relative inline-flex items-center rounded-md px-3.5 py-2 text-body-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    scrolled
                      ? "text-text-secondary hover:text-primary focus-visible:ring-ring focus-visible:ring-offset-surface"
                      : "text-white/85 hover:text-white focus-visible:ring-white focus-visible:ring-offset-transparent"
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 ease-brand group-hover:scale-x-100",
                      scrolled ? "bg-accent" : "bg-white"
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="accent"
              size="md"
              className={cn(
                "hidden sm:inline-flex",
                scrolled
                  ? "focus-visible:ring-ring focus-visible:ring-offset-surface"
                  : "focus-visible:ring-white focus-visible:ring-offset-transparent"
              )}
            >
              <Link href="/apply">Apply Now</Link>
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-haspopup="dialog"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:hidden",
                scrolled
                  ? "text-text-primary hover:bg-muted focus-visible:ring-ring focus-visible:ring-offset-surface"
                  : "text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-transparent"
              )}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileNav open={mobileOpen} onOpenChange={setMobileOpen} />
    </>
  );
}
