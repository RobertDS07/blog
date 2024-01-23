import type { PossibleNavLinks } from "@ui/organisms/Navbar/navbar.interface";

interface MetaProps {
  tags?: string[];
  description: string;
}

export interface Props {
  pageTitle: string;
  selectedNavLink: PossibleNavLinks;
  meta: MetaProps;
}
