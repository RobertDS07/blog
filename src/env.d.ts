/* eslint-disable no-unused-vars */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="./@types/svg.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUCLIC_BASE_URL: string;
  PUCLIC_MY_TWITTER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
