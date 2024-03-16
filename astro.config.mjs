import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "/src/",
        "@components": "/src/components",
        "@styles": "/src/styles"
      }
    }
  },
  integrations: [tailwind(), react()]
});