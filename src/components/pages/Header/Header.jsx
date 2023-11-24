import React from "react";
import styles from "./Header.module.css";
import MyModal from "../../UI/MyModal/MyModal";
import SignInForm from "../../SignInForm/SignInForm";
import SignUpForm from "../../SignUpForm/SignUpForm";
import { useState } from "react";
import MyFooter from "../../UI/MyFooter/MyFooter";
import someBook from "../../../images/SomeBook.png";
import { useContext } from "react";
import { UserRoleContext } from "../../../context/myContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [isAccountExist, setIsAccountExist] = useState(true);
  const { userRole } = useContext(UserRoleContext);
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
            <h3
              onClick={() => {
                if (!userRole) {
                  setVisible(true);
                } else if (userRole === "user") {
                  navigate("/userPage");
                } else if (userRole === "courseModerator") {
                  navigate("/courseModeratorPage");
                } else if (userRole === "siteManager") {
                  navigate("/ManagerPage");
                }
              }}
            >
              Home
            </h3>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => {
              navigate("/courses");
            }}
          >
            <h3>Courses</h3>
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
      <MyFooter />
    </div>
  );
};

export default Header;
