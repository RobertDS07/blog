import { createSignal } from "solid-js";
import { Portal } from "solid-js/web";

import Button from "@ui/atoms/Button/Button";
import Icon from "@ui/atoms/Icon/Icon";

import SocialMedia from "@ui/molecules/SocialMedia/SocialMedia";

import { NAV_DATA, RESUME_LINK } from "../Navbar/const";
import type { NavData } from "../Navbar/navbar.interface";
import { type Props } from "./HiddeableNavbar.interface";
import createClass, { createBackdropClass } from "./HiddeableNavbar.styles";

const HiddleableNavbar = ({ selectedLink }: Props) => {
  const [isVisible, setIsVisible] = createSignal(false);

  const verifyIfIsSelected = (navData: NavData) => navData.id === selectedLink;

  return (
    <>
      <Button buttonProps={{ onClick: () => setIsVisible(true) }}>
        <Icon type="menuIcon" />
      </Button>

      <Portal>
        <div
          onClick={() => setIsVisible(false)}
          class={createBackdropClass({
            visibility: isVisible() ? "visible" : "invisible",
          })}
        />

        <nav
          class={createClass({
            visibility: isVisible() ? "visible" : "invisible",
          })}
        >
          <a href="/">
            <Icon type="blogIcon" class="h-16 w-16" />
          </a>

          <div class="flex flex-col gap-2">
            {NAV_DATA.map((navData) => {
              const isSelected = verifyIfIsSelected(navData);

              return (
                <Button
                  as="a"
                  class={`${isSelected ? "text-purple-main" : ""}`}
                  linkProps={{ href: navData.href }}
                >
                  {navData.text}
                </Button>
              );
            })}

            <Button
              as="a"
              class="border-b-2 border-purple-main"
              linkProps={{ href: RESUME_LINK, target: "_blank" }}
            >
              Resume
            </Button>
          </div>

          <div class="absolute bottom-10 flex justify-center">
            <SocialMedia orientation="HORIZONTAL" />
          </div>
        </nav>
      </Portal>
    </>
  );
};

export default HiddleableNavbar;
