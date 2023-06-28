import type { PossibleNavLinks } from "@ui/organisms/Navbar/navbar.interface";

interface MetaProps {
  tags?: string[];
  description: string;
}

interface Props {
  pageTitle: string;
  selectedNavLink: PossibleNavLinks;
  meta: MetaProps;
}

export default Props;
