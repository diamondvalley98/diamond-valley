/**
 * Design tokens — single source for theme values.
 * CSS mirrors these in `styles/tokens.css` / `app/globals.css`.
 * Swap per client by editing this file (or loading client-specific tokens later).
 */
export const themeTokens = {
  colors: {
    background: "#0c0b0a",
    foreground: "#f4efe6",
    muted: "#a89f93",
    mutedForeground: "#8a8278",
    card: "#141210",
    cardElevated: "#1a1714",
    border: "rgba(201, 169, 110, 0.22)",
    borderStrong: "rgba(201, 169, 110, 0.4)",
    primary: "#c9a96e",
    primaryForeground: "#0c0b0a",
    accent: "#e8d5a8",
    ring: "#c9a96e",
    destructive: "#c45c5c",
    destructiveForeground: "#f4efe6",
    success: "#6b9b7a",
  },
  typography: {
    fontDisplay: "var(--font-display)",
    fontBody: "var(--font-body)",
    /** Fluid type scale */
    display: "clamp(3rem, 8vw, 6rem)",
    h1: "clamp(2.5rem, 5vw, 3.75rem)",
    h2: "clamp(2rem, 4vw, 3rem)",
    h3: "clamp(1.5rem, 3vw, 1.875rem)",
    h4: "1.25rem",
    body: "1.05rem",
    bodySm: "0.925rem",
    caption: "0.78rem",
    overline: "0.75rem",
    leadingTight: "1.1",
    leadingSnug: "1.35",
    leadingNormal: "1.65",
    trackingOverline: "0.2em",
  },
  spacing: {
    sectionY: {
      sm: "4rem",
      md: "6rem",
      lg: "7rem",
    },
    containerPx: {
      mobile: "1.25rem",
      desktop: "2rem",
    },
    stack: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2.5rem",
    },
  },
  layout: {
    maxWidth: "72rem", // max-w-6xl
    maxWidthWide: "80rem", // max-w-7xl
    headerHeight: "4.5rem",
  },
  radii: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.35)",
    md: "0 8px 24px rgba(0, 0, 0, 0.35)",
    lg: "0 16px 48px rgba(0, 0, 0, 0.45)",
    glow: "0 0 40px rgba(201, 169, 110, 0.12)",
  },
  motion: {
    durationFast: "150ms",
    duration: "250ms",
    durationSlow: "500ms",
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  zIndex: {
    header: 40,
    stickyCta: 40,
    overlay: 50,
    modal: 50,
    skipLink: 100,
  },
} as const;

export type ThemeTokens = typeof themeTokens;
