import React from "react";
import CourseCard from "../CourseCard/CourseCard";
import styles from "./AllCourses.module.css";
const AllCoursesList = ({ courses }) => {
  return (
    <div className={styles.cardContainer}>
      {courses.length === 0 && (
        <h1 className={`container text-center ${styles.notFound}`}>
          Курсів не знайдено
        </h1>
      )}
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default AllCoursesList;
