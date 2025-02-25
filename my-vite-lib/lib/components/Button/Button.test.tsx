import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyButton, { MyButtonProps } from "./Button";

describe("MyButton", () => {
  const renderButton = (props: MyButtonProps) =>
    render(<MyButton {...props}>{props.children}</MyButton>);

  it("renders the button with children", () => {
    renderButton({ children: "Click Me" });
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument();
  });

  it("applies the correct theme class", () => {
    renderButton({ theme: "dark", children: "Dark Button" });
    expect(screen.getByRole("button", { name: /dark button/i })).toHaveAttribute(
      "data-theme",
      "dark"
    );
  });

  it("responds to click events", () => {
    const onClick = jest.fn();
    renderButton({ onClick, children: "Click Me" });
    userEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("passes additional props to the button element", () => {
    renderButton({ "aria-label": "custom-label", children: "Click Me" });
    expect(screen.getByRole("button", { name: /click me/i })).toHaveAttribute(
      "aria-label",
      "custom-label"
    );
  });
});