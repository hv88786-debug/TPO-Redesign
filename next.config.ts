import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Add real recruiter-logo / CMS domains here once decided.
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Left off for now: the Navbar/Hero intentionally link to routes
    // (/about, /placements, /for-recruiters, /students, /downloads,
    // /contact, /apply) that don't exist yet — they're listed as
    // build-phase tasks in ARCHITECTURE.md. With typedRoutes on, Next
    // rejects any <Link href> that isn't a real route under app/, which
    // makes it impossible to ship nav before every page behind it exists.
    // Re-enable once all linked routes are built.
    typedRoutes: false,
  },
  reactStrictMode: true,
};

export default nextConfig;
