import React from "react";
import styles from "./AboutList.module.css";
import AboutItem from "./AboutItem";
const AboutList = (props) => {
  return (
    <div className={styles.list}>
      {props.list.map((item) => {
        return (
          <AboutItem
            blockLayoutNumber={item.blockLayoutNumber}
            imgSrc={item.imgSrc}
            title={item.title}
            content={item.content}
          />
        );
      })}
    </div>
  );
};

export default AboutList;
