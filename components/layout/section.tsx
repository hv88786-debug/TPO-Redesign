import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";
import { grainStyle } from "@/lib/decorative";

type SectionSpacing = "sm" | "md" | "lg";
type SectionSurface = "background" | "surface" | "muted" | "primary" | "transparent";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  surface?: SectionSurface;
  containerWidth?: "narrow" | "content" | "wide" | "full";
  /** Set false when the section renders its own <Container> children (e.g. split layouts). */
  withContainer?: boolean;
  as?: "section" | "div" | "header" | "footer";
  /**
   * Adds an almost-invisible background wash (two soft radial glows + a
   * hairline grain texture) behind the section content. Defaults to `true`
   * for the `background`/`muted` surfaces — the long flat bands that make
   * up most of the page — and `false` for `surface` (thin bands like FAQ,
   * TrustedCompanies), `primary`, and `transparent` (Hero/CTA already carry
   * their own, stronger decorative treatment). Pass explicitly to override
   * either way. Purely decorative: rendered `aria-hidden` and inert under
   * `prefers-reduced-motion` since it's static (no animation at all).
   */
  depth?: boolean;
}

const spacingMap: Record<SectionSpacing, string> = {
  sm: "py-section-sm",
  md: "py-section",
  lg: "py-section-lg",
};

const surfaceMap: Record<SectionSurface, string> = {
  background: "bg-background",
  surface: "bg-surface",
  muted: "bg-muted",
  primary: "bg-primary text-primary-foreground",
  transparent: "bg-transparent",
};

/**
 * Every homepage block (hero, stats, notices, recruiters, CTA, etc.) should
 * be wrapped in <Section> rather than a raw <section> tag, so vertical
 * rhythm and background alternation stay consistent without one-off
 * padding values creeping into individual components.
 */
export function Section({
  spacing = "md",
  surface = "background",
  containerWidth = "content",
  withContainer = true,
  as: Tag = "section",
  depth,
  className,
  children,
  ...props
}: SectionProps) {
  const showDepth = depth ?? (surface === "background" || surface === "muted");

  return (
    <Tag className={cn("relative", spacingMap[spacing], surfaceMap[surface], className)} {...props}>
      {showDepth ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/[0.035] blur-[120px]" />
          <div className="absolute -right-1/4 bottom-0 h-[26rem] w-[26rem] rounded-full bg-accent/[0.045] blur-[110px]" />
          <div className="absolute inset-0 opacity-[0.025]" style={grainStyle} />
        </div>
      ) : null}
      {withContainer ? (
        <Container width={containerWidth} className="relative">
          {children}
        </Container>
      ) : (
        children
      )}
    </Tag>
  );
}
