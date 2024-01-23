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

export interface Props {
  selectedLink: PossibleNavLinks;
}

export type { NavData, PossibleNavLinks };
