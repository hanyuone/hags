/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      colors: {
        "footer": "#2C323E",
        "main": "#222428",
        "alert-border": "FFA39E",
        "alert-fill": "#FFF1F0",
        "alert-text": "#262626",
        "button-fill": "#D5E5FF",
        "button": "#131F7E",
        "card-fill": "#2C323E",
      },
      boxShadow: {
        card: "-0.125rem 0.25rem 0.625rem rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        custom: ["Readex Pro", "Segoe UI", "Arial", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}