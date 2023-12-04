import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(/images/homeBackground.jpg)` }}
    >
      <div className={styles.content}>
        <h1>Sushi-Boss</h1>
        <h3>The best sushi around, order it and see for yourself</h3>
        <Link to="/menu">
          <button>Order</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
