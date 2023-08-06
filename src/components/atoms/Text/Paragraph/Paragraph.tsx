import { FC } from "react";
import styles from "./Paragraph.module.scss";
import "../../../../styles/main.scss";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * What is the size?
   */
  size?: "medium" | "large";
  /**
   * What is the weight?
   */
  weight?: 400 | 500;
}

const Paragraph: FC<ParagraphProps> = ({ size, weight, children }) => {
  // Defaults
  const paragraphSize = size ?? "medium";
  const paragraphWeight = weight ? `w${weight}` : "w400";

  return (
    <p
      className={`${styles.base} ${styles[paragraphSize]} ${styles[paragraphWeight]}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
