/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,ts}"],
  theme: {
    extend: {
      colors: {
        purple: {
          main: "#732580",
        },
        blue: {
          night: "#0B192E",
        },
        white: {
          50: "#F5EAEA",
          500: "#D0CDCD",
        },
      },
    },
  },
};
