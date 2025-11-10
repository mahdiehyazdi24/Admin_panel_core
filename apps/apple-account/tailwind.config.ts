import type { Config } from "tailwindcss";
import defaultConfig from "@repo/tailwind-config/config";

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: "#7557E9",
      },
    },
  },
  presets: [defaultConfig],
  plugins: [],
};
export default config;
