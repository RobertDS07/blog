import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import mdx from "@astrojs/mdx";
import solid from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import SVGInjectPlugin from "vite-plugin-svg-inject";
import createOgImage from "./astro-integrations/create-og-image/create-og-image";

const { PUCLIC_BASE_URL } = loadEnv(import.meta.env.MODE, process.cwd(), "");

const NON_INDEXED_PATHS = ["/og/"];

export default defineConfig({
  site: PUCLIC_BASE_URL,
  vite: {
    plugins: [SVGInjectPlugin()],
  },
  integrations: [
    solid(),
    mdx(),
    createOgImage(),
    sitemap({
      filter: (url) => {
        const isToExclude = NON_INDEXED_PATHS.some((path) =>
          url.endsWith(path)
        );
        return !isToExclude;
      },
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
