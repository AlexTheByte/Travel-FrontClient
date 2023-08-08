// Pill.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Pill from "./Pill";

describe("Pill Component", () => {
  it("should render the text correctly", () => {
    const { getByText } = render(<Pill>Hello</Pill>);
    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("should have the 'rounded-full' class", () => {
    const { container } = render(<Pill>Hello</Pill>);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("should have the 'bg-primary' class", () => {
    const { container } = render(<Pill>Hello</Pill>);
    expect(container.firstChild).toHaveClass("bg-primary");
  });

  it("should have the 'px-3' class", () => {
    const { container } = render(<Pill>Hello</Pill>);
    expect(container.firstChild).toHaveClass("px-3");
  });

  it("should have the 'py-1' class", () => {
    const { container } = render(<Pill>Hello</Pill>);
    expect(container.firstChild).toHaveClass("py-1");
  });

  it("should have the 'text-[12px]' class", () => {
    const { container } = render(<Pill>Hello</Pill>);
    expect(container.firstChild).toHaveClass("text-[12px]");
  });
});
