import React from "react";
import styles from "./Header.module.css";
import MyModal from "../MyModal/MyModal";
import SignInForm from "../SignInForm/SignInForm";
import { useState } from "react";
import someBook from '../../images/SomeBook.png'
const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <SignInForm />
      </MyModal>
      <nav className={styles.myNav}>
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
        <button
          className={styles.my_button}
          type="button"
          onClick={() => {
            setVisible(true);
          }}
        >
          Sign in
        </button>
      </nav>
      <section id="top">
        <div className={styles.hero}></div>
      </section>
      <section id="about" className={styles.contentBoxToBottom}>
        <div className={styles.aboutContent}>
          <div className="row">
            <div className="col-md-5">
            <h2>Про сайт</h2>
            <p className="mt-5">
              Ласкаво просимо на Military English! Цей сайт розроблений з метою
              надати військовим можливість вивчати спеціалізовану військову
              англійську мову на професійному рівні.
            </p>
            <p>
              Наша мета - створити зручне та ефективне середовище для вивчення
              військової англійської мови, де ви зможете збагачувати свій
              словник, виконувати завдання для покращення ваших навичок та брати
              участь у різноманітних навчальних програмах.
            </p>
            <p>
              Ми віримо в важливість володіння англійською мовою в армії та
              військових операціях, і надаємо інструменти, які допоможуть вам
              досягти успіху в цій галузі.
            </p>
            </div>
            <div className="col-md-7">
              <img src={someBook} alt="someBook" className={styles.myImg} />
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className={styles.contentBoxToTop}></section>
      <section id="contact" className={styles.contentBoxToBottom}></section>
    </div>
  );
};

export default Header;
