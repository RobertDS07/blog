import type { CollectionEntry } from "astro:content";

type Props = Omit<CollectionEntry<"posts">, "render">;

export default Props;
