import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const text = getByText(/Hello World/i);
  expect(text).toBeInTheDocument();
});

test("Snapshot matches", () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});
