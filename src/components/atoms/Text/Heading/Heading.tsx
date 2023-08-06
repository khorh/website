import { FC } from "react";
import styles from "./Heading.module.scss";
import "../../../../styles/main.scss";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * What is the type?
   */
  type: "h1" | "h2";
  /**
   * What is the font?
   */
  font: "primary" | "secondary";
}

const Heading: FC<HeadingProps> = ({ type, font, children }) => {
  switch (type) {
    case "h1":
      return <h1 className={`${styles[font]}`}>{children}</h1>;
    case "h2":
      return <h2 className={`${styles[font]}`}>{children}</h2>;
  }
};

export default Heading;
