import type { HTMLAttributes } from "astro/types";
import type { VariantProps } from "class-variance-authority";
import type { JSXElement } from "solid-js";

import type createClass from "./button.styles";

type PossibleHtmlTag = "button" | "a";

interface LinkProps {
  href: string;
  target?: "_blank";
}

interface ButtonProps {
  onClick?: () => void;
}

interface Props extends VariantProps<typeof createClass> {
  children?: JSXElement;
  as?: PossibleHtmlTag;
  linkProps?: LinkProps;
  buttonProps?: ButtonProps;
  class?: HTMLAttributes<"button">["class"];
}

export type { PossibleHtmlTag };
export default Props;
