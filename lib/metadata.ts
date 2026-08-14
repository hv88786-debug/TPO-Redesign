import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";

/**
 * Base metadata applied at the root layout. Individual routes can call
 * `buildMetadata()` to extend/override title & description while keeping
 * OpenGraph/Twitter/robots defaults consistent.
 */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.institute}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "Government Engineering College Ajmer",
    "GEC Ajmer placements",
    "Training and Placement Cell",
    "engineering college placements Rajasthan",
    "GEC Ajmer recruiters",
  ],
  authors: [{ name: siteConfig.institute }],
  creator: siteConfig.institute,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    title: `${siteConfig.name} | ${siteConfig.institute}`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.shortName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.institute}`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
}

/** Helper for nested routes to extend base metadata without repeating boilerplate. */
export function buildMetadata({ title, description, path = "" }: BuildMetadataOptions = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description: description ?? siteConfig.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description: description ?? siteConfig.description,
    },
    twitter: {
      title,
      description: description ?? siteConfig.description,
    },
  };
}
