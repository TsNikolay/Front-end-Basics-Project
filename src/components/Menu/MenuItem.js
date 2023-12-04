import React from "react";
import styles from "./MenuItem.module.css";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  const { title, description, weight, price, image } = props;
  return (
    <div className={styles.itemCard}>
      <img src={"/" + image} alt={title} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h2 className={styles.itemTitle}>{title}</h2>
        <p className={styles.itemDescription}>{description}</p>
        <div className={styles.itemInfo}>
          <p className={styles.itemValue}>
            <strong>{weight}</strong>
          </p>
          <p className={styles.itemValue}>
            <strong>${price.toFixed(2)}</strong>
          </p>
        </div>
      </div>

      <Link className={styles.addToCartButton}>
        <button>Add to cart</button>
      </Link>
    </div>
  );
};

export default MenuItem;
