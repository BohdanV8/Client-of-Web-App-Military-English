import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./CourseOfModeratorCard.module.css";
import useCategoryById from "../../hooks/useCategoryById";
import { useNavigate } from "react-router-dom";
import otherIMG from "../../images/icons8-курс-94.png";
import Loader from "../../components/UI/Loader/Loader";
const CourseOfModeratorCard = ({ course }) => {
  const { title, url_of_photo, id_of_category, description, date } = course;
  const [imageUrl, setImageUrl] = useState();
  const category = useCategoryById(id_of_category);
  const navigate = useNavigate();
  const [isFetched, setIsFetched] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/courses/uploads/${url_of_photo}`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const imageUrl = URL.createObjectURL(blob);
        setImageUrl(imageUrl);
        setIsFetched(false);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setIsFetched(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div
      className={styles.courseCard}
      onClick={() => {
        const someCourse = course;
        const jsonString = JSON.stringify(someCourse);
        localStorage.setItem("selectedCourse", jsonString);
        navigate("/selectedCourseOfModerator");
      }}
    >
      {isFetched ? (
        <Loader />
      ) : (
        <div>
          <h3>{title}</h3>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className={styles.courseImage} />
          ) : (
            <img src={otherIMG} alt={title} className={styles.courseImage} />
          )}
          <p>Category: {category}</p>
          <p>{description}</p>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
        </div>
      )}
      {/* <h3>{title}</h3>
      {imageUrl ? (
        <img src={imageUrl} alt={title} className={styles.courseImage} />
      ) : (
        <img src={otherIMG} alt={title} className={styles.courseImage} />
      )}
      <p>Category: {category}</p>
      <p>{description}</p>
      <p>Date: {new Date(date).toLocaleDateString()}</p> */}
    </div>
  );
};

export default CourseOfModeratorCard;
