import { type Props as ArticleCardProps } from "@ui/molecules/ArticleCard/articleCard.interface";
import { type Props as FeedbackCardProps } from "@ui/molecules/FeedbackCard/feedbackCard.interface";

export interface Props {
  articles: ArticleCardProps[];
  feedbacks: FeedbackCardProps[];
}
