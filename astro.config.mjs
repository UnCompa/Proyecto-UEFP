import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    i18n: {
      defaultLocale: 'es',
      // Todas las URL que no contengan `es` o `fr` después de `https://stargazers.club/` se tratarán como el idioma predeterminado, es decir, `en`
      locales: {
        en: 'en-US',
        // El valor de `defaultLocale` debe estar presente en las claves de `locales`
        es: 'es-ES'
      }
    }
  })],
  site: "https://unidad-educativa-fiscal-pichincha.vercel.app",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  output: "server",
  adapter: vercel(),
  
});