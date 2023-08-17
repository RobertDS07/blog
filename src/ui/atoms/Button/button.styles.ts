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
    "border-purple-main",
    "px-3",
    "py-2",
    "text-xl",
    "font-bold",
    "focus:ring-2",
    "focus:ring-purple-300",
    "focus:ring-opacity-75",
    "[&>svg]:fill-purple-main",
  ],
  {
    variants: {
      variant: {
        outline: [
          "rounded-md",
          "border-2",
          "border-purple-main",
          "hover:bg-purple-main",
          "[&>svg]:hover:fill-white-500",
        ],
        text: [],
      },
      size: {
        xs: ["px-2", "py-1", "text-xs"],
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
