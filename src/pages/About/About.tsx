import styles from "./About.module.scss";
import Heading from "../../components/atoms/Text/Heading/Heading";
import Paragraph from "../../components/atoms/Text/Paragraph/Paragraph";

const About = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.heading}>
          <Heading type="h1" font="primary">
            About
          </Heading>
        </div>
      </header>
      <main className={styles.main}>
        <Paragraph size="large"></Paragraph>
      </main>
    </>
  );
};

export default About;
