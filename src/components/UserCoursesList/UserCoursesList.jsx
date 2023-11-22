import React from "react";
import styles from "./UserCoursesList.module.css"
import UserCourseCard from "../UserCourseCard/UserCourseCard";
const UserCoursesList = ({ courses, update, setUpdate }) => {
  return (
    <div className={styles.cardContainer}>
      {courses.length === 0 && (
        <h1 className={`container text-center ${styles.notFound}`}>
          Курсів не знайдено
        </h1>
      )}
      {courses.map((course) => (
        <UserCourseCard key={course._id} course={course} update = {update} setUpdate = {setUpdate}/>
      ))}
    </div>
  );
};

export default UserCoursesList;
