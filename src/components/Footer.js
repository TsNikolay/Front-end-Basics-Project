import React from "react";
import styles from "./Footer.module.css";
import { FaTelegram, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
      <div className={styles.socialMedia}>
        <Link to="https://www.instagram.com" target="_blank">
          <FaInstagram />
        </Link>
        <Link to="https://web.telegram.org" target="_blank">
          <FaTelegram />
        </Link>
        <Link to="https://www.youtube.com" target="_blank">
          <FaYoutube />
        </Link>
      </div>
      <p>&copy; 2023 SushiBoss</p>
    </div>
  );
};

export default Footer;
