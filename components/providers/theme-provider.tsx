"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

/**
 * Dark mode is architected but OFF by default, per the design brief:
 * this is a government website that must render consistently and
 * predictably for all visitors on first load. `enableSystem` is false
 * so we never silently switch based on OS preference.
 *
 * To turn dark mode on later: flip `defaultTheme` to "system" and/or
 * expose a toggle using `useTheme()` from next-themes in the header.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
