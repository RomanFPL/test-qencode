import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("should exist", () => {
  render(<App />);
  const page = screen.getByText("App");
  expect(page).toBeDefined();
});
