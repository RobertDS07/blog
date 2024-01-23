import AstroIcon from "../../../../public/icons/astro.svg";
import AwsIcon from "../../../../public/icons/aws.svg";
import BlogIcon from "../../../../public/icons/blog-icon.svg";
import ClockIcon from "../../../../public/icons/clock.svg";
import EyeIcon from "../../../../public/icons/eye.svg";
import GithubIcon from "../../../../public/icons/github.svg";
import HeartIcon from "../../../../public/icons/heart.svg";
import JobIcon from "../../../../public/icons/job.svg";
import LinkedinIcon from "../../../../public/icons/linkedin.svg";
import MailIcon from "../../../../public/icons/mail.svg";
import MenuIcon from "../../../../public/icons/menu.svg";
import NestIcon from "../../../../public/icons/nest.svg";
import PaperIcon from "../../../../public/icons/paper.svg";
import ReactIcon from "../../../../public/icons/react.svg";
import SolidIcon from "../../../../public/icons/solid.svg";
import TailwindIcon from "../../../../public/icons/tailwind.svg";
import TwitterIcon from "../../../../public/icons/twitter.svg";
import TypescriptIcon from "../../../../public/icons/typescript.svg";
import { type Props } from "./icon.interface";

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
      case "menuIcon":
        return MenuIcon;
      case "mailIcon":
        return MailIcon;
      case "nest":
        return NestIcon;
      case "react":
        return ReactIcon;
      case "tailwind":
        return TailwindIcon;
      case "typescript":
        return TypescriptIcon;
      case "astro":
        return AstroIcon;
      case "aws":
        return AwsIcon;
      case "solid":
        return SolidIcon;
      default:
        throw new Error("Icon not found for type: " + type);
    }
  };

  const Icon = getIcon();

  return <Icon {...svgAttributes} />;
};

export default Icon;
