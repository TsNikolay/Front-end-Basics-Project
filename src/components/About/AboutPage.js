import React from "react";
import styles from "./AboutPage.module.css";
import AboutList from "./AboutList";
import { getAllAboutData } from "../../dummyData";

const AboutPage = () => {
  const aboutData = getAllAboutData();
  return (
    <div className={styles.container}>
      <AboutList list={aboutData}></AboutList>
    </div>
  );
};

export default AboutPage;
