import typographyPlugin from "@tailwindcss/typography";

import { withUt } from "uploadthing/tw";

export default {
  content: ["./src/**/*.{js,mjs,jsx,ts,tsx,mdx}"],
  darkMode: "selector",
  theme: {
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      boxShadow: {
        glow: "0 0 4px rgb(0 0 0 / 0.1)",
      },
      maxWidth: {
        lg: "33rem",
        "2xl": "40rem",
        "3xl": "50rem",
        "5xl": "66rem",
        "7xl": "80rem",
      },
      opacity: {
        1: "0.01",
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "inherit",
            a: {
              color: "inherit",
              textDecoration: "underline",
              fontWeight: "500",
              "&:hover": {
                color: "inherit",
              },
            },
            strong: {
              color: "inherit",
            },
            code: {
              color: "inherit",
            },
            h1: {
              color: "inherit",
            },
            h2: {
              color: "inherit",
            },
            h3: {
              color: "inherit",
            },
            h4: {
              color: "inherit",
            },
            blockquote: {
              color: "inherit",
            },
            hr: {
              borderColor: "inherit",
              opacity: 0.4,
            },
            ol: {
              color: "inherit",
            },
            ul: {
              color: "inherit",
            },
            li: {
              color: "inherit",
            },
            p: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [typographyPlugin],
};
