import { FC } from "react";
import styles from "./ParagraphLink.module.scss";

export interface ParagraphLinkProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * What is the size?
   */
  size?: "medium" | "large";
  /**
   * What is weight?
   */
  weight?: 400 | 500;
  /**
   * What is the destination?
   */
  destination?: string;
  /**
   * Does the link open in a new tab?
   */
  external?: boolean;
}

const ParagraphLink: FC<ParagraphLinkProps> = ({
  size,
  weight,
  destination,
  external,
  children,
}) => {
  // Defaults
  const paragraphLinkSize = size ?? "medium";
  const paragraphLinkWeight = weight ? `w${weight}` : "w400";
  const paragraphLinkDestination = destination ? `${destination}` : "";
  const paragraphLinkExternal = external ? "_blank" : "_self";

  return (
    <a
      className={`${styles.base} ${styles[paragraphLinkSize]} ${styles[paragraphLinkWeight]}`}
      href={paragraphLinkDestination}
      target={paragraphLinkExternal}
    >
      {children}
    </a>
  );
};

export default ParagraphLink;
