import React from "react";
import styles from "./UserCourseCard.module.css";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import otherIMG from "../../images/icons8-курс-94.png";
import useCategoryById from "../../hooks/useCategoryById";
import useModeratorById from "../../hooks/useModeratorById";
import { useNavigate } from "react-router-dom";
const UserCourseCard = ({ course, update, setUpdate }) => {
  const navigate = useNavigate();
  const { title, url_of_photo, id_of_category, description, date } = course;
  const moderator = useModeratorById(course.id_of_courseModerator);
  const [imageUrl, setImageUrl] = useState();
  const category = useCategoryById(id_of_category);
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

  const unsubscribe = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(
        `http://localhost:5000/api/courses/unsubscribe/${course._id}`
      );
      var u = update;
      var new_render = u + 1;
      setUpdate(new_render);
    } catch (error) {
      console.error("Error subscribe:", error);
    }
  };
  return (
    <div
      className={styles.courseCard}
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
          <p>Moderator: {moderator && moderator.username}</p>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
          <div className="container">
            <button
              type="button"
              className="btn btn-outline-primary mx-2"
              onClick={() => {
                unsubscribe();
              }}
            >
              Unsubscribe
            </button>
            <button
              type="button"
              className="btn btn-outline-primary mx-2"
              onClick={() => {
                const someCourse = course;
                const jsonString = JSON.stringify(someCourse);
                localStorage.setItem("selectedCourse", jsonString);
                navigate("/selectedUserCourse");
              }}
            >
              go to study
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCourseCard;
