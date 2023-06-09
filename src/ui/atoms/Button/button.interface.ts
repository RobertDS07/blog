import type { HTMLAttributes } from "astro/types";
import type { VariantProps } from "class-variance-authority";
import type { JSXElement } from "solid-js";

import type { IconTypes } from "../Icon/icon.interface";
import type createClass from "./button.styles";

type PossibleHtmlTag = "button" | "a";

interface WithIconProps {
  type: IconTypes;
}

interface LinkProps {
  href: string;
  target?: "_blank";
}

interface Props extends VariantProps<typeof createClass> {
  children: JSXElement;
  as?: PossibleHtmlTag;
  linkProps?: LinkProps;
  withIcon?: WithIconProps;
  class?: HTMLAttributes<"button">["class"];
}

export default Props;
