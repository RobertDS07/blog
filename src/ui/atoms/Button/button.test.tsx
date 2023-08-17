import { render } from "@solidjs/testing-library";
import { it, expect, vi } from "vitest";

import Button from "./Button";

it("should render correct text", () => {
  const CONTENT = "click";

  const { getByTestId } = render(() => <Button>{CONTENT}</Button>);

  expect(getByTestId("button")).toContainHTML("</button>");
});

it("should render 'a' element", () => {
  const { getByTestId } = render(() => <Button as="a">click</Button>);

  expect(getByTestId("link")).toContainHTML("</a>");
});

it("should have correct 'a' props", () => {
  const HREF = "/home";
  const TARGET = "_blank";
  const DEFAULT_REL = "noopener noreferrer";

  const { getByTestId } = render(() => (
    <Button as="a" linkProps={{ href: HREF, target: TARGET }}>
      click
    </Button>
  ));
  const component = getByTestId("link");

  expect(component).toHaveProperty("href", expect.stringContaining(HREF));
  expect(component).toHaveProperty("target", TARGET);
  expect(component).toHaveProperty("rel", DEFAULT_REL);
});

it("should not have onClick in 'a' element", () => {
  const HREF = "/home";
  const TARGET = "_blank";

  const { getByTestId } = render(() => (
    <Button
      as="a"
      linkProps={{ href: HREF, target: TARGET }}
      buttonProps={{
        onClick: () => {
          console.log(".");
        },
      }}
    >
      click
    </Button>
  ));
  const component = getByTestId("link");

  expect(component).not.toHaveProperty("onclik");
});

it("should have correct 'button' props", () => {
  const spyFn = vi.fn();
  const { getByTestId } = render(() => (
    <Button
      buttonProps={{
        onClick: spyFn,
      }}
    >
      click
    </Button>
  ));
  const component = getByTestId("button");

  component.click();

  expect(spyFn).toBeCalledTimes(1);
});

it("should render correct size class for different sizes", () => {
  const { queryByText } = render(() => (
    <>
      <Button size="md">md</Button>
      <Button size="sm">sm</Button>
      <Button size="xs">xs</Button>
    </>
  ));

  expect(queryByText("md")).toHaveClass("px-3 py-2 text-xl");
  expect(queryByText("sm")).toHaveClass("px-2", "py-1", "text-base");
  expect(queryByText("xs")).toHaveClass("px-2", "py-1", "text-xs");
});

it("should render correct variant class for different variants", () => {
  const { queryByText } = render(() => (
    <>
      <Button variant="outline">outline</Button>
      <Button variant="text">text</Button>
    </>
  ));

  expect(queryByText("outline")).toHaveClass(
    "rounded-md border-2 border-purple-main hover:bg-purple-main [&>svg]:hover:fill-white-500"
  );
  expect(queryByText("text")).toHaveClass(
    "relative flex w-fit cursor-pointer items-center justify-center gap-4 border-purple-main px-3 py-2 text-xl font-bold focus:ring-2 focus:ring-purple-300 focus:ring-opacity-75 [&>svg]:fill-purple-main"
  );
});

it("should render correct classes when sended via props", () => {
  const { queryByRole } = render(() => <Button class="bg-black">click</Button>);

  expect(queryByRole("button")).toHaveClass("bg-black");
});
