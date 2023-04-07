import type { HTMLAttributes } from "astro/types";

import type { IconTypes } from "../Icon/icon.interface";

type PossibleHtmlTag = "button" | "a";

type ButtonVariants = "outline";

interface WithIconProps {
  type: IconTypes;
}

interface Props {
  as?: PossibleHtmlTag;
  variant?: ButtonVariants;
  withIcon?: WithIconProps;
  class?: HTMLAttributes<"button">["class"];
}

export default Props;