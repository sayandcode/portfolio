const plugin = require("tailwindcss/plugin");
const typewriter = require("tailwind-typewriter");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Overpass Mono", "monospace"],
    },
    extend: {},
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
        "*": { color: "#444" },
        a: { color: "#3273dc" },
      });
    }),
  ],
};
