import type { Config } from "tailwindcss";
import defaultConfig from "@repo/tailwind-config/config";

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        primary: "#3667F6",
      },
    },
  },
  presets: [defaultConfig],
  plugins: [],
};

export default config;
