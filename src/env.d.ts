declare module "*.svg" {
  import type { HTMLAttributes } from "astro/types";
  import type { Component } from "solid-js";

  const src: Component<HTMLAttributes<"svg">>;
  export default src;
}

/// <reference types="astro/client" />
