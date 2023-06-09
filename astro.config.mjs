import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solid from "@astrojs/solid-js";
import SVGInjectPlugin from "vite-plugin-svg-inject";

export default defineConfig({
  vite: {
    plugins: [SVGInjectPlugin()],
  },
  integrations: [
    solid(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
