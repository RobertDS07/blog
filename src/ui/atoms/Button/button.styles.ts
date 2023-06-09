import { cva } from "class-variance-authority";

const createClass = cva(
  [
    "relative",
    "flex",
    "w-fit",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "gap-4",
    "rounded-md",
    "border-purple-main",
    "px-3",
    "py-2",
    "text-xl",
    "font-bold",
    "text-white-500",
    "focus:ring-2",
    "focus:ring-purple-300",
    "focus:ring-opacity-75",
    "[&>svg]:fill-purple-main",
  ],
  {
    variants: {
      variant: {
        outline: [
          "border-2",
          "border-purple-main",
          "px-5",
          "py-2",
          "hover:bg-purple-main",
          "[&>svg]:hover:fill-white-500",
        ],
        text: [],
      },
      size: {
        sm: ["px-2", "py-1", "text-base"],
        md: [],
      },
    },
    defaultVariants: {
      size: "md",
      variant: "text",
    },
  }
);

export default createClass;
