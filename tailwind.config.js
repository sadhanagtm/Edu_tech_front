module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./HOC/**/*.{js,ts,jsx,tsx}",
    "./components/UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ssm: "600px",
      // => @media (min-width: 600px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      "3xl": { min: "2000px" },
      // => @media (min-width: 1536px) { ... }
      fold: { max: "280px" },
    },
    extend: {
      height: {
        98: "29rem",
        104: "31rem",
        128: "32.5rem",
        138: "34rem",
        144: "38rem",
        145: "39rem",
        148: "42rem",
        146: "40rem",
        150: "43.3rem",
        152: "48rem",
        154: "50rem",
        155: "52.5rem",
      },
      colors: {
        NeonGreen: "#88E6E6",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
