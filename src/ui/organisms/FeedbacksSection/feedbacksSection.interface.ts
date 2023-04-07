import type FeedbackCardProps from "../../molecules/FeedbackCard/feedbackCard.interface";

interface Props {
  feedbacks: Array<
    Pick<
      FeedbackCardProps,
      "feedback" | "name" | "photoSrc" | "socialMediaData"
    >
  >;
}

export default Props;
