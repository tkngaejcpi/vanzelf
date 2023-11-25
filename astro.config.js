import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.rileycki.com",
  redirects: {
    "/writing": "/articles",
  },

  integrations: [tailwind(), sitemap()],

  prefetch: true,
});
