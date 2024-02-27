import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-vertical": `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
        "gradient-horizontal": `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
        "gradient-vertical-dark": `linear-gradient(180deg, #0A313C -10%, rgba(41, 39, 120, 0.5) 60%, #0A313C 120%)`,
        "gradient-horizontal-dark": `linear-gradient(90deg, #0A313C -10%, rgba(41, 39, 120, 0.5) 60%, #0A313C 120%)`,
        "image-login":
          "linear-gradient(60deg, rgba(127, 209, 204, 0.8) -60%, rgba(41, 39, 120, 0.8) 80%), url(\"/assets/bgLogin.png\")",
        "image-sidebar": "url(\"/assets/Background.svg\")",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        green: {
          100: "#50B2C0",
          200: "#255D6A",
          300: "#0A313C",
        },
        purple: {
          100: "#8381D9",
          200: "#2A2879",
        },
        gray: {
          100: "#F8F9FC",
          200: "#E6E8F2",
          300: "#D1D6E4",
          400: "#8D95AF",
          500: "#303F73",
          600: "#252D4A",
          700: "#181C2A",
          800: "#0E1116",
        },
      },
      lineHeight: {
        shorter: "125%",
        short: "140%",
        base: "160%",
        tall: "180%",
      },
      borderRadius: {
        xs: "2.5px",
        sm: "5px",
        md: "10px",
        lg: "20px",
        full: "99999px",
      },
    },
  },
  plugins: [],
};
export default config;
