const plugin = require("tailwindcss/plugin");
const typewriter = require("tailwind-typewriter");
// eslint-disable-next-line import/no-extraneous-dependencies
const proseTypography = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["float-right", "float-left"], // for github-calendar
  theme: {
    fontFamily: {
      sans: ["Overpass Mono", "monospace"],
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              "margin-inline": "auto",
            },
            a: {
              "--base-color": "#3273dc",
              color: "var(--base-color)",
              "text-decoration": "none",
              "box-shadow": "inset 0 0 0 0 var(--base-color)",
              "transition-property": "box-shadow, color",
              "transition-duration": "0.1s",
              "transition-timing-function": "ease-in",
              "&:hover, &:focus-visible": {
                outline: "none",
                color: "white",
                "box-shadow": "inset 0 -1.5em 0 0 var(--base-color)",
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    typewriter({
      wordsets: {
        whoami: {
          words: [
            "full stack developer",
            "motion designer",
            "mechanical engineer",
            "guitarist",
            "libertarian",
          ],
          writeSpeed: 0.2,
          eraseSpeed: 0.05,
          caretWidth: "0.5em",
        },
      },
    }),
    plugin(({ addBase }) => {
      addBase({
        body: { color: "#444" },
        a: { color: "#3273dc" },
      });
    }),
    proseTypography,
  ],
};
