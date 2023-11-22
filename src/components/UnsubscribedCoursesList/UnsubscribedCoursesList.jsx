import React from "react";
import styles from "./UnsubscribedCoursesList.module.css"
import UnsubscribedCourseCard from "../UnsubscribedCourseCard/UnsubscribedCourseCard";
const UnsubscribedCoursesList = ({courses, update, setUpdate}) => {
    return (
        <div className={styles.cardContainer}>
          {courses.length === 0 && (
            <h1 className={`container text-center mt-5 ${styles.notFound}`}>
              Курсів не знайдено
            </h1>
          )}
          {courses.map((course) => (
            <UnsubscribedCourseCard key={course._id} course={course} update = {update} setUpdate = {setUpdate}/>
          ))}
        </div>
      );
}

export default UnsubscribedCoursesList;