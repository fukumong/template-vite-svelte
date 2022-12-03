import plugin from "tailwindcss/plugin.js";

function spacings(theme) {
  return {
    auto: "auto",
    "fit-content": "fit-content",
    ...theme("screens"),
    ...theme("spacing"),
    ...theme("fractions"),
  };
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,svelte}",
  ],
  theme: {
    extend: {
      extend: {
        minHeight: spacings,
        minWidth: spacings,
        maxHeight: spacings,
        maxWidth: spacings,
      },
      fractions: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        full: "100%",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: '0 2px 1px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({matchUtilities, theme}) {
      matchUtilities({
        "text-shadow": (value) => ({
          textShadow: value,
        })
      }, {values: theme("textShadow")})
    })
  ],
}
