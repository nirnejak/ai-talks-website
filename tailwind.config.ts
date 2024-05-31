import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          from: { rotate: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          from: { rotate: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        rotate: {
          from: { rotate: "rotate(0deg)" },
          to: { transform: "rotate(-360deg)" },
        },
        "rotate-reverse": {
          from: { rotate: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        orbit: "orbit 15s linear infinite",
        "orbit-reverse": "orbit-reverse 15s linear infinite",
        rotate: "rotate 15s linear infinite",
        "rotate-reverse": "rotate-reverse 15s linear infinite",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1216px",
    },
    fontFamily: {
      sans: ["var(--sans-font)"],
      heading: ["var(--font-clash-display)"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

export default config
