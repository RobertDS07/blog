type PossibleNavLinks =
  | "HOME"
  | "FEEDBACKS"
  | "BLOG"
  | "TIMELINE"
  | "RESUME"
  | "ABOUT";

interface NavData {
  id: PossibleNavLinks;
  text: Capitalize<string>;
  href: string;
}

interface Props {
  selectedLink: PossibleNavLinks;
}

export default Props;
export type { NavData, PossibleNavLinks };
