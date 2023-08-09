import type { HTMLAttributes } from "astro/types";

export type IconTypes =
  | "job"
  | "eye"
  | "clock"
  | "paper"
  | "heart"
  | "github"
  | "twitter"
  | "linkedin"
  | "blogIcon"
  | "menuIcon"
  | "mailIcon"
  | "nest"
  | "tailwind"
  | "typescript"
  | "react"
  | "astro"
  | "solid"
  | "aws";

interface Props extends Pick<HTMLAttributes<"svg">, "class"> {
  type: IconTypes;
}

export default Props;
