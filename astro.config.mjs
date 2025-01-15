import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Please don't replace this! This is the URL where your site will be deployed.
  site: "https://emasuriano.github.io",
  base: "resume",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
