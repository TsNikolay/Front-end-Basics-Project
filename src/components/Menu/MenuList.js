import React from "react";
import MenuItem from "./MenuItem";
import styles from "./MenuList.module.css";

const MenuList = (props) => {
  return (
    <div className={styles.list}>
      {props.list.map((item) => {
        return (
          <MenuItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            weight={item.weight}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default MenuList;
