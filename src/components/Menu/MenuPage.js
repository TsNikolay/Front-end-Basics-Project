import React from "react";
import styles from "./MenuPage.module.css";
import { getAllProducts } from "../../dummyData";
import MenuList from "./MenuList";

const MenuPage = () => {
  const sushiList = getAllProducts();

  return (
    <div className={styles.container}>
      <MenuList list={sushiList}></MenuList>
    </div>
  );
};

export default MenuPage;
