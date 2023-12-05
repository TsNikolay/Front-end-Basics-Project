import React from "react";
import styles from "./AboutItem.module.css";

const AboutItem = (props) => {
  return (
    <div
      className={`${styles.block} ${styles[`block${props.blockLayoutNumber}`]}`}
    >
      <img src={props.imgSrc} alt="" />
      <div className={styles.additionalImage}>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default AboutItem;
