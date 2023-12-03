import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import homeBackground from "../../images/homeBackground.jpg";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <h1>SushiBoss</h1>
        <h3>The best sushi around, order it and see for yourself.</h3>
        <Link to="/menu">
          <button>Order</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
