import React from "react";
import styles from "./CourseModeratorPage.module.css";
import MyMenu from "../../UI/MyMenu/MyMenu";
const CourseModeratorPage = () => {
  return (
    <div className="text-center mt-3">
      <MyMenu />
      <h1 className={styles.greeting}>
        Ласкаво просимо {localStorage.getItem("userName")}
      </h1>
      <div className="container mt-3">
        <p className={styles.description}>
          Тут ви можете керувати своїми курсами та додавати нові. Досліджуйте
          свої можливості і не соромтеся покращувати навчальний досвід для своїх
          учнів.
        </p>
      </div>
    </div>
  );
};

export default CourseModeratorPage;
