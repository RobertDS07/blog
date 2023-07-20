import Icon from "@ui/atoms/Icon/Icon";

import type Props from "./socialMedia.interface";
import createWrapperClass from "./socialMedia.styles";

const SocialMedia = ({ orientation = "VERTICAL", fill = "purple" }: Props) => {
  const wrapperClass = createWrapperClass({ fill, orientation });

  return (
    <div class={wrapperClass}>
      <a
        target="_blank"
        href={import.meta.env.PUCLIC_MY_GITHUB_URL}
        rel="noopener noreferrer"
        title="Link to my Github"
      >
        <Icon type="github" />
      </a>

      <a
        target="_blank"
        href={import.meta.env.PUCLIC_MY_LINKEDIN_URL}
        rel="noopener noreferrer"
        title="Link to my linkedin"
      >
        <Icon type="linkedin" />
      </a>

      <a
        target="_blank"
        href={import.meta.env.PUCLIC_MY_TWITTER_URL}
        rel="noopener noreferrer"
        title="Link to my twitter"
      >
        <Icon type="twitter" />
      </a>

      <a
        href={`mailto:${import.meta.env.PUCLIC_MY_EMAIL}`}
        title="Link to send me a email"
      >
        <Icon type="mailIcon" />
      </a>
    </div>
  );
};

export default SocialMedia;
