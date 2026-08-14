import { Poppins, Inter } from "next/font/google";

/**
 * Heading face — Poppins.
 * Loaded with a restrained weight set; the homepage should not need
 * anything beyond medium/semibold/bold for a govt-institutional tone.
 */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/**
 * Body face — Inter.
 * Variable-ish weight range for body copy, captions, and UI chrome.
 */
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/** Combined className helper for the root <html> tag. */
export const fontVariables = `${poppins.variable} ${inter.variable}`;
