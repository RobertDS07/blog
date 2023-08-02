import type { CollectionEntry } from "astro:content";

interface Props {
  title: string;
  summary: string;
  articleSlug: string;
  minutesToRead: number;
  createdAt: string;
  tags: CollectionEntry<"posts">["data"]["tags"];
}

export default Props;
