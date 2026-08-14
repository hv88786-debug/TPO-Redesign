import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/**
 * Design-token driven Tailwind config.
 * All colors are read from CSS variables defined in app/globals.css
 * so the same class names automatically resolve correctly in dark mode
 * once `dark` is enabled on <html>.
 */
const config: Config = {
  darkMode: ["class"], // architecture ready, toggled via ThemeProvider — disabled by default
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    // --- Breakpoints (mobile-first, one extra step above shadcn defaults for large desktop displays) ---
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      // --- Container widths (used by <Container /> primitive, not just Tailwind's .container) ---
      maxWidth: {
        content: "1280px", // standard content width
        wide: "1440px", // wide sections (stats bands, media)
        narrow: "768px", // reading-width content (notices, articles)
      },

      // --- Color system — all HSL CSS variables, see app/globals.css ---
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--text-primary))",

        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--text-primary))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
          ink: "hsl(var(--accent-ink))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--text-secondary))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          inverse: "hsl(var(--text-inverse))",
        },
      },

      // --- Typography scale ---
      fontFamily: {
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // custom scale on top of Tailwind defaults — used for headline hierarchy
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-md": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "heading-lg": ["1.875rem", { lineHeight: "1.25", fontWeight: "600" }],
        "heading-md": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "heading-sm": ["1.25rem", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.01em" }],
      },

      // --- Spacing additions for section rhythm ---
      spacing: {
        "section-sm": "3rem",
        section: "5rem",
        "section-lg": "7rem",
        18: "4.5rem",
        22: "5.5rem",
      },

      // --- Radius tokens (mapped to CSS var so density can be tuned globally) ---
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
        xl: "calc(var(--radius) + 6px)",
        card: "var(--radius-card)",
      },

      // --- Elevation system — restrained, institutional (no glow/neon shadows) ---
      boxShadow: {
        xs: "0 1px 2px 0 hsl(215 25% 15% / 0.04)",
        sm: "0 1px 3px 0 hsl(215 25% 15% / 0.06), 0 1px 2px -1px hsl(215 25% 15% / 0.06)",
        md: "0 4px 10px -2px hsl(215 25% 15% / 0.08), 0 2px 6px -2px hsl(215 25% 15% / 0.05)",
        lg: "0 12px 24px -6px hsl(215 25% 15% / 0.10), 0 4px 8px -4px hsl(215 25% 15% / 0.06)",
        xl: "0 20px 40px -8px hsl(215 25% 15% / 0.12)",
      },

      // Mirrors constants/theme.ts `motion.ease` — the ONE reveal/interaction
      // curve for the whole site. Use `ease-brand` instead of re-typing the
      // cubic-bezier as an arbitrary value (which Tailwind's JIT flags as
      // ambiguous when it appears next to another arbitrary utility).
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.985)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
