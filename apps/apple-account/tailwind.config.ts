import type { Config } from "tailwindcss";
import defaultConfig from "@repo/tailwind-config/config";

const config: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: {
        IRANYekanXFaNum: ["var(--font-iranyekanxfanum)"],
        IRANYekanX: ["var(--font-iranyekanx)"],
      },
      colors: {
        primary: { DEFAULT: "#7557E9", light: "#EAE6FC" },
        gray: {
          light: "#ECEEF6",
          50: "#F3F2F2",
          75: "#d9d9d9",
          100: "#b5b5b5",
          150: "#BFBABE",
          200: "#566a7f",
        },
      },
    },
  },
  presets: [defaultConfig],
  plugins: [],
};
export default config;
