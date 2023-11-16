import React from "react";
import styles from "./Header.module.css";
import MyModal from "../../UI/MyModal/MyModal";
import SignInForm from "../../SignInForm/SignInForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { useState } from "react";
import MyFooter from "../../UI/MyFooter/MyFooter";
import someBook from "../../../images/SomeBook.png";
const Header = () => {
  const [visible, setVisible] = useState(false);
  const [isAccountExist, setIsAccountExist] = useState(true);
  return (
    <div className={styles.header}>
      <MyModal visible={visible} setVisible={setVisible}>
        {isAccountExist ? (
          <SignInForm setIsAccountExist={setIsAccountExist} />
        ) : (
          <SignUpForm setIsAccountExist={setIsAccountExist} />
        )}
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
            <a href="#contacts">Contacts</a>
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
                Ласкаво просимо на Military English! Цей сайт розроблений з
                метою надати військовим можливість вивчати спеціалізовану
                військову англійську мову на професійному рівні.
              </p>
              <p>
                Ціль цього сайту - створення зручного та ефективного середовища
                для вивчення військової англійської мови, де ви зможете
                збагачувати свій словниковий запас, проходити курси для
                покращення ваших навичок та брати участь у різноманітних
                навчальних програмах.
              </p>
              <p>
                У наш складний час важливість володіння англійською мовою в
                армії неможливо переоцінити, і ми надаємо інструменти, які
                допоможуть вам досягти успіху в цій галузі.
              </p>
            </div>
            <div className="col-md-7">
              <img src={someBook} alt="someBook" className={styles.myImg} />
            </div>
          </div>
        </div>
      </section>
      <section id="courses" className={styles.contentBoxToTop}></section>
      <section id="contacts" className={styles.contentBoxToBottom}>
        <div className="row mt-5 container-fluid">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className={styles.contactContent}>
              <h2>Контакти</h2>
              <p>
                Ми завжди готові відповісти на ваші запитання та надати
                додаткову інформацію
              </p>

              <div>
                <h3>Зв'яжіться з нами:</h3>
                <p>Email: thorykbv@gmail.com</p>
                <p>Телефон: 0689416887</p>
              </div>

              <div className={styles.contactForm}>
                <h3>Напишіть нам:</h3>
                <form>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Ваше ім'я:</label>
                    <input
                      className={styles.myInputAndTextArea}
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Ваш Email:</label>
                    <input
                      className={styles.myInputAndTextArea}
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Повідомлення:</label>
                    <textarea
                      className={styles.myInputAndTextArea}
                      id="message"
                      name="message"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="mt-3">
                    <button type="submit" className={styles.my_button}>
                      Відправити
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyFooter />
    </div>
  );
};

export default Header;
