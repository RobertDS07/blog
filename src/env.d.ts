/* eslint-disable no-unused-vars */
/// <reference path="../.astro/types.d.ts" />
/// <reference types="./@types/svg.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  PUCLIC_BASE_URL: string;
  PUCLIC_MY_TWITTER_URL: string;
  PUCLIC_MY_GITHUB_URL: string;
  PUCLIC_MY_LINKEDIN_URL: string;
  PUCLIC_MY_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
