import { cva } from "class-variance-authority";

const createBackdropClass = cva(
  [
    "fixed",
    "left-0",
    "top-0",
    "z-modal-backdrop",
    "h-screen",
    "w-screen",
    "bg-black",
    "transition-all",
  ],
  {
    variants: {
      visibility: {
        visible: ["visible", "opacity-40"],
        invisible: ["invisible", "opacity-0"],
      },
    },
    defaultVariants: {
      visibility: "invisible",
    },
  }
);

const createClass = cva(
  [
    "flex",
    "fixed",
    "top-0",
    "h-full",
    "w-56",
    "flex-col",
    "gap-14",
    "bg-blue-night",
    "px-5",
    "py-10",
    "transition-all",
    "z-hiddeable-navbar",
  ],
  {
    variants: {
      visibility: {
        visible: ["left-0"],
        invisible: ["-left-56"],
      },
    },
  }
);

export { createBackdropClass };
export default createClass;
