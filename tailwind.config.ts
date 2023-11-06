import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: colors.white,
      black: colors.black,
      gray: {
        "50": "#f7f8f8",
        "100": "#eeeff0",
        "200": "#d9dcde",
        "300": "#c8cdd0",
        "400": "#909aa0",
        "500": "#737e84",
        "600": "#5c666d",
        "700": "#4c5358",
        "800": "#41474b",
        "900": "#393e41",
        "950": "#26292b",
      },
      zinc: {
        "50": "#f7f7f8",
        "100": "#f2f2f3",
        "200": "#dadadd",
        "300": "#bababf",
        "400": "#94959c",
        "500": "#777880",
        "600": "#606169",
        "700": "#4f4f55",
        "800": "#434349",
        "900": "#3b3c3f",
        "950": "#27272a",
      },
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: {
        "50": "#f4f7f7",
        "100": "#e2e9eb",
        "200": "#c9d5d8",
        "300": "#a3b7bd",
        "400": "#75919b",
        "500": "#5a7580",
        "600": "#4d636d",
        "700": "#415058",
        "800": "#3c484e",
        "900": "#353e44",
        "950": "#21272b",
      },
      red: colors.red,
      primary: {
        "50": "#f4f7f7",
        "100": "#e2eaeb",
        "200": "#c9d6d8",
        "300": "#a3b9bd",
        "400": "#76949a",
        "500": "#5a7880",
        "600": "#4e656c",
        "700": "#43555b",
        "800": "#3c494e",
        "900": "#363f43",
        "950": "#121618",
      },
      secondary: {
        "50": "#fefefe",
        "100": "#efefef",
        "200": "#dcdcdc",
        "300": "#bdbdbd",
        "400": "#989898",
        "500": "#7c7c7c",
        "600": "#656565",
        "700": "#525252",
        "800": "#464646",
        "900": "#3d3d3d",
        "950": "#292929",
      },
      success: {
        "50": "#f4faeb",
        "100": "#e6f4d3",
        "200": "#cfeaac",
        "300": "#aedb7b",
        "400": "#8fca51",
        "500": "#73b234",
        "600": "#568b25",
        "700": "#436b20",
        "800": "#37551f",
        "900": "#31491e",
        "950": "#17270c",
      },
      error: {
        "50": "#fef2f2",
        "100": "#fee2e2",
        "200": "#fecaca",
        "300": "#fda4a4",
        "400": "#f97070",
        "500": "#f04343",
        "600": "#dd2525",
        "700": "#c91d1d",
        "800": "#9a1a1a",
        "900": "#801c1c",
        "950": "#450a0a",
      },
      warning: {
        "50": "#fdf9ed",
        "100": "#f9eccc",
        "200": "#f3d894",
        "300": "#edbf5c",
        "400": "#e8a530",
        "500": "#e1881f",
        "600": "#c76718",
        "700": "#a54918",
        "800": "#873a19",
        "900": "#6f3018",
        "950": "#3f1709",
      },
      purple: {
        "50": "#f0f3fd",
        "100": "#e4eafb",
        "200": "#ced8f7",
        "300": "#b1bef0",
        "400": "#919ce8",
        "500": "#767dde",
        "600": "#5e5ccf",
        "700": "#524eb7",
        "800": "#424093",
        "900": "#393976",
        "950": "#232244",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
