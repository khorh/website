import { FC, useState } from "react";
import styles from "./Nav.module.scss";
import Icon from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import NavLink from "../../atoms/NavLink/NavLink";
import { navLinks, NavLinksProps } from "./NavList";

const Nav: FC = () => {
  // Nav links opens and closes
  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  // Display nav links
  const displayNavLinks = navLinks.map((navLink: NavLinksProps) => {
    return (
      <NavLink destination={navLink.destination} key={navLink.label}>
        {navLink.label}
      </NavLink>
    );
  });

  return (
    <nav className={styles.nav}>
      <Logo />
      <div className={styles.nav__vertical} onClick={toggleNavLinks}>
        {!showNavLinks && <Icon name="bs-list" />}
        {showNavLinks && (
          <>
            <Icon name="bs-x-circle" />
            {displayNavLinks}
          </>
        )}
      </div>
      <div className={styles.nav__horizontal}>{displayNavLinks}</div>
    </nav>
  );
};

export default Nav;
