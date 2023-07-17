import Icon from "@ui/atoms/Icon/Icon";

import type Props from "./socialMedia.interface";
import createWrapperClass from "./socialMedia.styles";

const SocialMedia = ({ orientation = "VERTICAL", fill = "purple" }: Props) => {
  const wrapperClass = createWrapperClass({ fill, orientation });

  return (
    <div class={wrapperClass}>
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

      <a
        href="mailto:robertdamacenobob@gmail.com"
        title="Link to send me a email"
      >
        <Icon type="mailIcon" />
      </a>
    </div>
  );
};

export default SocialMedia;
