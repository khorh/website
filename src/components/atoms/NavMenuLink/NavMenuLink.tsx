import { FC } from "react";
import styles from "./NavMenuLink.module.scss";

export interface NavMenuLinkProps
  extends React.HTMLAttributes<HTMLLinkElement> {
  /**
   * What is the destination?
   */
  destination?: string;
}

const NavMenuLink: FC<NavMenuLinkProps> = ({ destination, children }) => {
  return (
    <a className={styles.common} href={destination}>
      {children}
    </a>
  );
};

export default NavMenuLink;
