import type Props from "./icon.interface";

import BlogIcon from "../../../../public/icons/blog-icon.svg";
import ClockIcon from "../../../../public/icons/clock.svg";
import EyeIcon from "../../../../public/icons/eye.svg";
import GithubIcon from "../../../../public/icons/github.svg";
import HeartIcon from "../../../../public/icons/heart.svg";
import JobIcon from "../../../../public/icons/job.svg";
import LinkedinIcon from "../../../../public/icons/linkedin.svg";
import PaperIcon from "../../../../public/icons/paper.svg";
import TwitterIcon from "../../../../public/icons/twitter.svg";

const Icon = ({ type, ...svgAttributes }: Props) => {
  const getIcon = () => {
    switch (type) {
      case "clock":
        return ClockIcon;
      case "job":
        return JobIcon;
      case "eye":
        return EyeIcon;
      case "heart":
        return HeartIcon;
      case "paper":
        return PaperIcon;
      case "github":
        return GithubIcon;
      case "linkedin":
        return LinkedinIcon;
      case "twitter":
        return TwitterIcon;
      case "blogIcon":
        return BlogIcon;
      default:
        throw new Error("Icon not found for type: " + type);
    }
  };

  const Icon = getIcon();

  return <Icon {...svgAttributes} />;
};

export default Icon;
