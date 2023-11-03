import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.hero}>
      <nav>
        <h2 className={styles.logo}>
          Military <span>English</span>
        </h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <button className={styles.my_button} type="button">
          Subscribe
        </button>
      </nav>
    </div>
  );
};

export default Header;
