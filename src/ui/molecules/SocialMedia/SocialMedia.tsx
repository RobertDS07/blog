import Icon from "@ui/atoms/Icon/Icon";

import type Props from "./socialMedia.interface";

const SocialMedia = ({ orientation = "VERTICAL" }: Props) => {
  const isVertical = orientation === "VERTICAL";

  return (
    <div class={`flex gap-6  ${isVertical ? "flex-col" : "flex-row"}`}>
      <a
        target="_blank"
        href="https://github.com/RobertDS07"
        rel="noopener noreferrer"
        title="Link to my Github"
      >
        <Icon type="github" />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/robert-d-262b0a129/"
        rel="noopener noreferrer"
        title="Link to my linkedin"
      >
        <Icon type="linkedin" />
      </a>

      <a
        target="_blank"
        href="https://twitter.com/bugextreme1"
        rel="noopener noreferrer"
        title="Link to my twitter"
      >
        <Icon type="twitter" />
      </a>
    </div>
  );
};

export default SocialMedia;
