import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

/**
 * The single Layout wrapper every route renders through (via app/layout.tsx).
 * Keeps header/footer composition in one place so page files only ever
 * describe their own content.
 */
export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
