"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { primaryNav } from "@/constants/nav";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const panelVariants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "tween" as const, duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: "100%", transition: { type: "tween" as const, duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Full-height slide-in drawer for < lg viewports. Radix Dialog supplies the
 * focus trap, Escape-to-close, and aria wiring; Framer Motion handles the
 * slide/stagger presentation on top of it.
 */
export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-primary/40 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-y-0 right-0 z-[70] flex h-full w-full max-w-sm flex-col bg-surface px-6 py-6 shadow-xl lg:hidden"
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title asChild>
                    <Logo variant="dark" className="[&_span]:text-heading-sm" />
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-muted hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>

                <motion.nav
                  aria-label="Primary"
                  className="mt-10 flex flex-1 flex-col gap-1"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {primaryNav.map((item) => (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => onOpenChange(false)}
                        className="block rounded-lg px-3 py-3 text-heading-sm font-medium text-text-primary transition-colors hover:bg-muted hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                <motion.div variants={itemVariants} initial="hidden" animate="visible" className="pt-4">
                  <Button asChild variant="accent" size="lg" className="w-full">
                    <Link href="/apply" onClick={() => onOpenChange(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
