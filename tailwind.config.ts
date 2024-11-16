import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        background2: "hsl(var(--background2))",
        foreground: "hsl(var(--foreground))",
        light: "hsl(var(--light))",
        darklight: "hsl(var(--darklight))",
        dark: "hsl(var(--dark))",
        verydark: "hsl(var(--verydark))",
        sight: "hsl(var(--sight))",
        hearing: "hsl(var(--hearing))",
        touch: "hsl(var(--touch))",
        smell: "hsl(var(--smell))",
        taste: "hsl(var(--taste))",
      },
      fontFamily: {
        fancy: ["var(--font-fancy)", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config
