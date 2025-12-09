/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border-primary)",
        input: "var(--border-input)",
        ring: "var(--text-primary)",
        background: "var(--bg-page)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--text-primary)",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#FFF9F2",
          foreground: "var(--text-primary)",
        },
        muted: {
          DEFAULT: "rgba(153, 153, 153, 0.2)",
          foreground: "var(--text-muted)",
        },
        card: {
          DEFAULT: "var(--bg-card)",
          foreground: "var(--text-primary)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        mono: ["SF Mono", "Menlo", "Monaco", "Courier New", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}