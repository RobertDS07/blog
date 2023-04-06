import type { HTMLAttributes } from "astro/types";

export type IconTypes = "job" | "eye" | "clock" | "paper" | "heart";

interface Props extends Pick<HTMLAttributes<"svg">, "class"> {
  type: IconTypes;
}

export default Props;
