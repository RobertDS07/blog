import type { JSX } from "solid-js";

interface Props {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
}

export default Props;
