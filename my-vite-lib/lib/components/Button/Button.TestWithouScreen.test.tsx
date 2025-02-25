import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyButton, { MyButtonProps } from "./Button";

describe("MyButton", () => {
  const renderButton = (props: MyButtonProps) =>
    render(<MyButton {...props}>{props.children}</MyButton>);

  it("renders the button with children", () => {
    const { getByRole } = renderButton({ children: "Click Me" });
    expect(getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("applies the correct theme class", () => {
    const { getByRole } = renderButton({ theme: "dark", children: "Dark Button" });
    expect(getByRole("button", { name: /dark button/i })).toHaveAttribute(
      "data-theme",
      "dark"
    );
  });

  it("responds to click events", () => {
    const onClick = jest.fn();
    const { getByRole } = renderButton({ onClick, children: "Click Me" });
    userEvent.click(getByRole("button", { name: /click me/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props to the button element", () => {
    const { getByRole } = renderButton({ "aria-label": "custom-label", children: "Click Me" });
    expect(getByRole("button", { name: /click me/i })).toHaveAttribute(
      "aria-label",
      "custom-label"
    );
  });
});