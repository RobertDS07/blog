type PossibleNavLinks = "HOME" | "FEEDBACKS" | "BLOG" | "TIMELINE" | "RESUME";

interface NavData {
  id: PossibleNavLinks;
  text: string;
  href: string;
}

interface Props {
  selectedLink: PossibleNavLinks;
}

export default Props;
export type { NavData, PossibleNavLinks };
