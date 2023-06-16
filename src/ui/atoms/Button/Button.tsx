import type Props from "./button.interface";
import createClass from "./button.styles";

const Button = ({
  children,
  size,
  variant,
  linkProps,
  buttonProps,
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
        return {
          onClick: buttonProps?.onClick,
        };
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
    </Element>
  );
};

export default Button;
