import Button from "@ui/atoms/Button/Button";
import { NAV_DATA } from "../Navbar/const";
import type { NavData } from "../Navbar/navbar.interface";
import type Props from "../Navbar/navbar.interface";

const HiddleableNavbar = ({ selectedLink }: Props) => {
  const verifyIfIsSelected = (navData: NavData) => navData.id === selectedLink;

  return (
    <nav class="flex gap-1">
      {/* {NAV_DATA.map((navData, index) => {
        const isSelected = verifyIfIsSelected(navData);

        return (
          // <Button
          //   as="a"
          //   class={`${isSelected ? "text-purple-main" : ""}`}
          //   linkProps={{ href: navData.href }}
          // >
          //   <span class="slashed-zero text-purple-main">0{index + 1}.</span>{" "}
          //   {navData.text}
          //   {isSelected && (
          //     <div class="absolute bottom-0 left-0 flex h-1/4 w-full items-center justify-center">
          //       <div class="h-1/2 w-1/3 rounded bg-purple-main" />
          //     </div>
          //   )}
          // </Button>
        );
      })} */}

      {/* <Button variant="outline" class="ml-4">
        Resume
      </Button> */}
    </nav>
  );
};

export default HiddleableNavbar;
