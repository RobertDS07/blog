import type ArticleCardProps from "../../molecules/ArticleCard/articleCard.interface";

interface Props {
  articles: Array<Pick<ArticleCardProps, "summary" | "title" | "articleSlug">>;
}

export default Props;
