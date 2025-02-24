import React from "react";
import styles from "./Button.module.css"; // Import CSS module

export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "dark" | "light" | "primary" | "secondary";
}

const MyButton: React.FC<MyButtonProps> = ({ theme, children, ...props }) => {
  return (
    <button className={styles.myButton} data-theme={theme} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
