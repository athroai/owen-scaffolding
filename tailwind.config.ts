import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#e8e8e8",
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c97a",
          dark: "#9a7a2e",
        },
        surface: {
          DEFAULT: "#111111",
          card: "#161616",
        },
        "border-subtle": "rgba(201, 168, 76, 0.2)",
        muted: {
          DEFAULT: "#a3a3a3",
          foreground: "#e8e8e8",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.2em",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #9a7a2e 0%, #c9a84c 45%, #e8c97a 100%)",
        "gold-gradient-dark":
          "linear-gradient(90deg, rgba(154,122,46,0.95) 0%, rgba(201,168,76,0.98) 50%, rgba(232,201,122,0.92) 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 0 1px rgba(201, 168, 76, 0.35), 0 12px 40px rgba(0,0,0,0.45)",
      },
      keyframes: {
        "chevron-bob": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
      },
      animation: {
        "chevron-bob": "chevron-bob 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
