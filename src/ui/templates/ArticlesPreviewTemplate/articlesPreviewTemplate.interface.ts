import { type Props as ArticleCardProps } from "../../molecules/ArticleCard/articleCard.interface";

export interface Props {
  articles: Array<
    Pick<
      ArticleCardProps,
      | "summary"
      | "title"
      | "articleSlug"
      | "tags"
      | "createdAt"
      | "minutesToRead"
    >
  >;
}
