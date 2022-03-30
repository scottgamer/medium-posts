import React from "react";
import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts component", () => {
  test("Renders the component with loading state", () => {
    render(<Posts />);
    screen.getByText(/Loading posts.../i);
  });

  // test("Renders the component with loading state", () => {
  //   render(<Posts />);
  // });
});
