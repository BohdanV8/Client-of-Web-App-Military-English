import React from "react";
import styles from "./UserTopicCard.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import otherIMG from "../../images/icons8-book-94.png";
import Loader from "../UI/Loader/Loader";
const UserTopicCard = ({ topic }) => {
  const [isFetched, setIsFetched] = useState(true);
  const [imageUrl, setImageUrl] = useState();
  const navigate = useNavigate();
  const { title, url_of_photo, description, date } = topic;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/topics/uploads/${url_of_photo}`,
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
      className={styles.topicCard}
      onClick={() => {
        const someTopic = topic;
        const jsonString = JSON.stringify(someTopic);
        localStorage.setItem("selectedTopic", jsonString);
         navigate("/selectedUserTopic");
      }}
    >
      {isFetched ? (
        <Loader />
      ) : (
        <div>
          <h3>{title}</h3>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className={styles.topicImage} />
          ) : (
            <img src={otherIMG} alt={title} className={styles.topicImage} />
          )}
          <p>{description}</p>
          <p>Date: {new Date(date).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default UserTopicCard;