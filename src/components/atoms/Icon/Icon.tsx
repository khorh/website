import { FC } from "react";
import styles from "./Icon.module.scss";
import "../../../styles/main.scss";
import iconList from "./IconList";

export interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * What is the icon's name?
   */
  name: string;
  /**
   * What is the icon's size?
   */
  size?: "small" | "medium";
}

const Icon: FC<IconProps> = ({ name, size }) => {
  // Defaults
  const iconSize = size ?? "medium";

  // Method to filter the icon
  const filteredIcon = iconList.filter((filter) => filter.name === name);

  // Method to display the icon
  const displayIcon = filteredIcon.map((display) => <display.svg key={name} />);

  return (
    <div className={`${styles.container} ${styles[iconSize]}`}>
      {displayIcon}
    </div>
  );
};

export default Icon;
