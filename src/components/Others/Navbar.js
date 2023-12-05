import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsiveNav);
  };

  return (
    <div className={styles.navbar}>
      <img src="/images/logo.png" alt="" />
      <div className={styles.links} ref={navRef}>
        <Link to="/" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/menu" onClick={showNavbar}>
          Menu
        </Link>
        <Link to="/about" onClick={showNavbar}>
          About
        </Link>
        <Link to="/contacts" onClick={showNavbar}>
          Contacts
        </Link>
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
