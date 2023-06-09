import Icon from "../Icon/Icon";
import type Props from "./button.interface";
import createClass from "./button.styles";

const Button = ({
  children,
  size,
  variant,
  withIcon,
  linkProps,
  class: classAttributes,
  as = "button",
}: Props) => {
  const className = createClass({ size, variant, class: classAttributes });

  const getElementProps = () => {
    switch (as) {
      case "a":
        return {
          href: linkProps?.href,
          target: linkProps?.target,
          rel: "noopener noreferrer",
        };
      case "button":
        return {};
    }
  };

  const Element = ({ children, ...props }: any) =>
    as === "a" ? (
      <a {...props}>{children}</a>
    ) : (
      <button {...props}>{children}</button>
    );

  return (
    <Element class={className} {...getElementProps()}>
      {children}

      {withIcon && <Icon type={withIcon.type} />}
    </Element>
  );
};

export default Button;
