import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.rileycki.com",
  redirects: {
    "/writing": "/articles",
    "/writing/reboot-to-a-brand-new-system-with-btrfs":
      "/articles/Reboot to a Brand New System with Btrfs",
    "/writing/boot-your-system-to-previous-state-with-btrfs-mandarin":
      "/articles/利用 btrfs 開機還原系統",
  },

  integrations: [tailwind(), sitemap()],
});
