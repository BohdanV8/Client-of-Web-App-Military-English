import React from "react";
import CourseOfModeratorCard from "../CourseOfModeratorCard/CourseOfModeratorCard";
import styles from "./CoursesOfModeratorList.module.css";
const CoursesOfModeratorList = ({ courses }) => {
  return (
    <div className={styles.cardContainer}>
      {courses.length === 0 && (
        <h1 className={`container text-center ${styles.notFound}`}>
          Курсів не знайдено
        </h1>
      )}
      {courses.map((course) => (
        <CourseOfModeratorCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CoursesOfModeratorList;
