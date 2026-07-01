import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBF9F5",
        "paper-dim": "#F3EFE7",
        sand: "#EDE6D8",
        champagne: "#C9A876",
        "champagne-deep": "#A9895C",
        graphite: "#232220",
        "graphite-soft": "#4A4844",
        ink: "#141312",
        "ink-soft": "#1E1D1B",
        line: "#DDD5C4",
        "line-dark": "#3A3733",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.9rem, 3.4vw, 3.1rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        edit: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
