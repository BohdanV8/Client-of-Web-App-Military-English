import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./UnsubscribedCourseCard.module.css";
import useCategoryById from "../../hooks/useCategoryById";
import otherIMG from "../../images/icons8-курс-94.png";
import Loader from "../../components/UI/Loader/Loader";
import useModeratorById from "../../hooks/useModeratorById";
const UnsubscribedCourseCard = ({ course, update, setUpdate }) => {
  const { title, url_of_photo, id_of_category, description, date } = course;
  const [imageUrl, setImageUrl] = useState();
  const category = useCategoryById(id_of_category);
  const [isFetched, setIsFetched] = useState(true);
  const moderator = useModeratorById(course.id_of_courseModerator)
  const subscribe = async() => {
    try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.post(
          `http://localhost:5000/api/courses/subscribe/${course._id}`
        );
        var u = update;
        var new_render = u + 1;
        setUpdate(new_render);
    } catch (error) {
      console.error("Error subscribe:", error);
    }
  };
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
    <div className={styles.courseCard}>
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
          {moderator && <p>Moderator of course: {moderator.username}</p>}
          <p>Date: {new Date(date).toLocaleDateString()}</p>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              subscribe();
            }}
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
};

export default UnsubscribedCourseCard;
