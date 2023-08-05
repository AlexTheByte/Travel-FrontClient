// SectionLittle.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SectionLittle from "./SectionLittle";

describe("SectionLittle Component", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <SectionLittle>
        <div>Child 1</div>
        <div>Child 2</div>
      </SectionLittle>,
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("should have the 'flex' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("flex");
  });

  it("should have the 'flex-col' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("flex-col");
  });

  it("should have the 'sm:rounded-md' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("sm:rounded-md");
  });

  it("should have the 'border-2' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("border-2");
  });

  it("should have the 'border-gray-200' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("border-gray-200");
  });

  it("should have the 'p-3' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("p-3");
  });

  it("should have the 'sm:border-solid' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("sm:border-solid");
  });

  it("should have the 'bg-white' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("bg-white");
  });

  it("should have the 'bg-opacity-40' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("bg-opacity-40");
  });

  it("should have the 'sm:shadow-md' class", () => {
    const { container } = render(
      <SectionLittle>
        <div>Child 1</div>
      </SectionLittle>,
    );

    expect(container.firstChild).toHaveClass("sm:shadow-md");
  });
});
