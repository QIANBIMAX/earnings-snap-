import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        brand: {
          50: "#eefbf7",
          100: "#d4f5eb",
          200: "#aaead7",
          300: "#75d6bc",
          400: "#3fbc9e",
          500: "#1f9f84",
          600: "#15806c",
          700: "#126658",
          800: "#125148",
          900: "#11433d"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 80px rgba(9, 14, 22, 0.35)",
        soft: "0 18px 60px rgba(4, 8, 15, 0.18)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top, rgba(31,159,132,0.25), transparent 32%), linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
