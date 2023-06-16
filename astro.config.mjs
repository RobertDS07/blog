import { defineConfig } from "astro/config";

import { loadEnv } from "vite";

import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import SVGInjectPlugin from "vite-plugin-svg-inject";

const { PUCLIC_BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  vite: {
    plugins: [SVGInjectPlugin()],
  },
  site: PUCLIC_BASE_URL,
  integrations: [
    solid(),
    mdx(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
