const plugin = require("tailwindcss/plugin");

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
    plugin(({ addBase }) => {
      addBase({
        "*": { color: "#444" },
        a: { color: "#3273dc" },
      });
    }),
  ],
};
