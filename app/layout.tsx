import type { Metadata, Viewport } from "next";
import { fontVariables } from "@/lib/fonts";
import { baseMetadata } from "@/lib/metadata";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteLayout } from "@/components/layout/site-layout";
import "./globals.css";

export const metadata: Metadata = baseMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#123A63",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <body className="font-body">
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
