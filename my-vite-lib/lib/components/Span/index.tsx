import React from "react";
import styles from "./Span.module.css"; // Import CSS module

export interface MySpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  theme?: "dark" | "light";
}

const defaultTheme = "light";

// const MySpan: React.FC<React.HTMLAttributes<HTMLSpanElement>> = (props) => {
const MySpan: React.FC<MySpanProps> = (props) => {
  const { className, children, theme = defaultTheme, ...restProps } = props;

  const applyClasses = `${className ? className + " " : ""}${styles.span}`;

  return (
    <span className={applyClasses} data-theme={theme} {...restProps}>
      {children}
    </span>
  );
};

export default MySpan;
