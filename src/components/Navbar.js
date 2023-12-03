import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Sushi" />
      </div>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </div>
  );
};

export default Navbar;
