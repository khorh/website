import { FC } from "react";
import styles from "./Logo.module.scss";
import LogoRaeChastain from "../../../assets/images/logo.png";

const Logo: FC = () => {
  return (
    <img
      className={styles.base}
      src={LogoRaeChastain}
      alt="rae chastain's logo"
    />
  );
};

export default Logo;
