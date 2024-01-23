import { type Props as FeedbackCardProps } from "../../molecules/FeedbackCard/feedbackCard.interface";

export interface Props {
  feedbacks: Array<
    Pick<
      FeedbackCardProps,
      "feedback" | "name" | "photoSrc" | "socialMediaData"
    >
  >;
}
