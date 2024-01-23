import { type Props } from "./Breadcrumb.interface";

const Breadcrumb = ({ links }: Props) => {
  const lastIndex = links.length - 1;

  return (
    <div class="flex flex-wrap gap-2">
      {links.map((link, index) => {
        const isLastIndex = index === lastIndex;

        return (
          <>
            <a
              href={link.href}
              class={`font-medium max-[339px]:text-sm ${
                isLastIndex ? "text-white-500" : "text-purple-main"
              }`}
            >
              {link.text} {!isLastIndex && <span>/</span>}
            </a>
          </>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
