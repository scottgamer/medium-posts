import React from "react";
import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts component", () => {
  test("Renders the component without data", () => {
    render(<Posts />);
    screen.getByRole("heading", { name: `Posting all day!` });
  });

  test("Renders the component with loading state", () => {
    render(<Posts />);
  });
});
