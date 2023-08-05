// Paper.test.js
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Importer les matchers supplémentaires

import Paper from "./Paper";

describe("Paper Component", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <Paper>
        <div>Child 1</div>
        <div>Child 2</div>
      </Paper>,
    );

    expect(getByText("Child 1")).toBeInTheDocument();
    expect(getByText("Child 2")).toBeInTheDocument();
  });

  it("should have the 'bg-paper' class", () => {
    const { container } = render(
      <Paper>
        <div>Child 1</div>
      </Paper>,
    );

    expect(container.firstChild).toHaveClass("bg-paper");
  });

  it("should render a rounded-lg div", () => {
    const { container } = render(
      <Paper>
        <div>Child 1</div>
      </Paper>,
    );

    expect(container.firstChild).toHaveClass("rounded-lg");
  });

  it("should render a shadow-2xl div", () => {
    const { container } = render(
      <Paper>
        <div>Child 1</div>
      </Paper>,
    );

    expect(container.firstChild).toHaveClass("shadow-2xl");
  });
});
