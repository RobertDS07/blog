/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss/defaultTheme')} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,ts,tsx}"],
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
          0: "#FFF",
          50: "#F5EAEA",
          500: "#D0CDCD",
        },
      },
      screens: {
        xs: "476px",
        md: "769px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      minHeight: {
        ...defaultTheme.spacing,
      },
      minWidth: {
        ...defaultTheme.spacing,
      },
      textShadow: {
        sm: "0 0px 5px var(--tw-shadow-color)",
      },
      zIndex: {
        "modal-backdrop": 1040,
        modal: 1050,
        "hiddeable-navbar": 1041,
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
