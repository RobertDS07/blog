import type { CollectionEntry } from "astro:content";

export interface Props {
  title: string;
  summary: string;
  articleSlug: string;
  minutesToRead: number;
  createdAt: string;
  tags: CollectionEntry<"posts">["data"]["tags"];
  activeShowMoreButton?: boolean;
  isToTruncate?: boolean;
}
