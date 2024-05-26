import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        en: "en-US",
        es: "es-ES"
      }
    }
  }), mdx()],
  site: "https://unidad-educativa-fiscal-pichincha.vercel.app",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
  markdown: {
    syntaxHighlight: "prism"
  }
});