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

export interface Props extends Pick<HTMLAttributes<"svg">, "class"> {
  type: IconTypes;
}
