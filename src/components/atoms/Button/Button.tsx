import { FC } from "react";
import styles from "./Button.module.scss";
import "../../../styles/main.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * What is the type?
   */
  type: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({type, children}) => {
  return (
    <button
      className={`${styles.base} ${styles[type]}`}
    >
      {children}
    </button>
  );
};

export default Button;
