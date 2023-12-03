import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="" />
      <div className={styles.links} ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </div>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
