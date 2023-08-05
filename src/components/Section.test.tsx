// Section.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Section from "./Section";

describe("Section Component", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Section>
        <div>Child 1</div>
        <div>Child 2</div>
      </Section>,
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("should have the 'relative' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("relative");
  });

  it("should have the 'h-full' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("h-full");
  });

  it("should have the 'w-full' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("w-full");
  });

  it("should have the 'sm:rounded-md' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("sm:rounded-md");
  });

  it("should have the 'border-2' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("border-2");
  });

  it("should have the 'sm:border-solid' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("sm:border-solid");
  });

  it("should have the 'border-gray-200' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("border-gray-200");
  });

  it("should have the 'shadow-xl' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("shadow-xl");
  });

  it("should have the 'drop-shadow-2xl' class", () => {
    const { container } = render(
      <Section>
        <div>Child 1</div>
      </Section>,
    );

    expect(container.firstChild).toHaveClass("drop-shadow-2xl");
  });
});
