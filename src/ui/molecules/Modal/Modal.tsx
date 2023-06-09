import { Portal } from "solid-js/web";
import type Props from "./modal.interface";

const Modal = ({ isOpen, onClose, children }: Props) => {
  return (
    isOpen && (
      <Portal>
        <div
          class="absolute left-0 top-0 h-full w-full bg-black p-10 opacity-30"
          onClick={onClose}
        >
          {children}
        </div>
      </Portal>
    )
  );
};

export default Modal;
