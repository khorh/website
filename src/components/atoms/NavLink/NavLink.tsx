import { FC } from "react";
import styles from "./NavLink.module.scss";

export interface NavLinkProps
  extends React.HTMLAttributes<HTMLLinkElement> {
  /**
   * What is the destination?
   */
  destination?: string;
}

const NavLink: FC<NavLinkProps> = ({ destination, children }) => {
  return (
    <a className={styles.common} href={destination}>
      {children}
    </a>
  );
};

export default NavLink;
