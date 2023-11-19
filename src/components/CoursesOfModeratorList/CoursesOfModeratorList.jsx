import React from "react";
import CourseOfModeratorCard from "../CourseOfModeratorCard/CourseOfModeratorCard";
import styles from "./CoursesOfModeratorList.module.css";
const CoursesOfModeratorList = ({ courses }) => {
  return (
    <div className={styles.cardContainer}>
      {courses.map((course) => (
        <CourseOfModeratorCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CoursesOfModeratorList;
