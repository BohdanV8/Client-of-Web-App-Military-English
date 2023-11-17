import React, { useState } from "react";
import styles from "./CourseModeratorPage.module.css";
import Logo from "../../../images/icons8-english-50.png";
import { Link } from "react-router-dom";
import MyModal from "../../UI/MyModal/MyModal";
import CourseForm from "../../CourseForm/CourseForm";
const CourseModeratorPage = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <CourseForm />
      </MyModal>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Logo} alt="Logo" />
            <div className="px-3 navbar-brand">
              <h2 className={styles.logoText}>
                Military <span>English</span>
              </h2>
            </div>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link className="nav-link px-2 link-dark" to="/">
                <h3>Main page</h3>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 link-dark">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 link-dark" to="/courses">
                <h3>Courses</h3>
              </Link>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className={styles.my_button}
              onClick={() => {
                setVisible(true);
              }}
            >
              <h4>Додати курс</h4>
            </button>
          </div>
        </header>
      </div>
      <div className="text-center mt-3">
        <h1 className={styles.greeting}>
          Ласкаво просимо {localStorage.getItem("userName")}
        </h1>
        <div className="container mt-3">
          <p className={styles.description}>
            Тут ви можете керувати своїми курсами та додавати нові навчальні
            матеріали. Досліджуйте свої можливості і не соромтеся
            експерементувати та покращувати навчальний досвід для своїх учнів.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseModeratorPage;
