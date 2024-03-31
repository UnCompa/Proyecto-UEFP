import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://unidad-educativa-fiscal-pichincha.vercel.app",
  i18n: {
    defaultLocale: "es",
    locales: ["es","en"],
    routing: {
      prefixDefaultLocale: true,
    }
  },
});