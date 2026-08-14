import { cn } from "@/lib/utils";

type ContainerWidth = "narrow" | "content" | "wide" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * narrow  — 768px  (reading-width: notices, policy text)
   * content — 1280px (default — most sections)
   * wide    — 1440px (stat bands, recruiter grids, media-heavy sections)
   * full    — no max-width, gutters only
   */
  width?: ContainerWidth;
  as?: React.ElementType;
}

const widthMap: Record<ContainerWidth, string> = {
  narrow: "max-w-narrow",
  content: "max-w-content",
  wide: "max-w-wide",
  full: "max-w-none",
};

export function Container({
  width = "content",
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthMap[width], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
