import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    // screens: {
    //   tablet: "690px",
    //   desktop: "1024px"

    // },
    extend: {
      screens: {
        // md: "800px",
        // lg: "1024px",
        // sm: "690px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      display: ["group-hover"],
      animation: {
        "scroll-horizontal": "scroll-horizontal 10s linear infinite"
      },
      keyframes: {
        "scroll-horizontal": {
          "0%": {
            transform: "translateX(100%)"
          },
          "100%": {
            transform: "translateX(-100%)"
          }
        }
      }
    }
  },
  plugins: []
} satisfies Config;
