import type { CollectionEntry } from "astro:content";

export type Props = Omit<CollectionEntry<"posts">, "render">;
