import type { PossibleNavLinks } from "@ui/organisms/Navbar/navbar.interface";

interface MetaProps {
  tags: string[];
  description: string;
  image: string;
}

interface Props {
  pageTitle: string;
  selectedNavLink: PossibleNavLinks;
  meta: MetaProps;
}

export default Props;
