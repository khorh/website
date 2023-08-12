import styles from "./Footer.module.scss";
import Divider from "../../atoms/Divider/Divider";
import Icon from "../../atoms/Icon/Icon";
import Paragraph from "../../atoms/Text/Paragraph/Paragraph";

const Footer = () => {
  // Social media links
  const facebookLink = () => {
    window.open("https://www.facebook.com/readchastain/", "blank");
  };
  const instagramLink = () => {
    window.open("https://www.instagram.com/readchastain/", "_blank");
  };

  return (
    <footer className={styles.container}>
      <Divider />
      <div className={styles.container__copyright}>
        <Paragraph size="medium" weight={500}>
          © 2023 Rae Chastain
        </Paragraph>
      </div>
      <div className={styles.container__icons}>
        <Icon name="bs-facebook" size="small" destination={facebookLink} />
        <Icon name="bs-instagram" size="small" destination={instagramLink} />
      </div>
    </footer>
  );
};

export default Footer;
