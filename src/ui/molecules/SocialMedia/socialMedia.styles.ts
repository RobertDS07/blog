import { cva } from "class-variance-authority";

const createWrapperClass = cva(["flex", "gap-6"], {
  variants: {
    orientation: {
      VERTICAL: ["flex-col"],
      HORIZONTAL: ["flex-row"],
    },
    fill: {
      purple: ["text-purple-main"],
      white: ["text-white-50"],
    },
  },
});

export default createWrapperClass;
