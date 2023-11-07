import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav>
        <h2 className={styles.logo}>
          Military <span>English</span>
        </h2>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <button className={styles.my_button} type="button">
          Sign in
        </button>
      </nav>
      <section id="#top">
        <div className={styles.hero}></div>
      </section>
    </div>
  );
};

export default Header;
