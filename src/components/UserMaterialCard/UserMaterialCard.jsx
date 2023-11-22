import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import styles from "./UserMaterialCard.module.css";
const UserMaterialCard = ({ material }) => {
  const [fileURL, setFileURL] = useState("");
  const [isFetched, setIsFetched] = useState(true);
  const [typeOfFile, setTypeOfFile] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/materials/getMaterialFile/${material._id}`,
          {
            responseType: "arraybuffer",
          }
        );

        const blob = new Blob([response.data], {
          type: response.headers["content-type"],
        });
        const fileURL = URL.createObjectURL(blob);
        setFileURL(fileURL);
        const fileExtension = material.url_of_file
          .split(".")
          .pop()
          .toLowerCase();
        setTypeOfFile(fileExtension);
        setIsFetched(false);
      } catch (error) {
        console.error("Error fetching photo:", error);
        setIsFetched(false);
      }
    };
    fetchData();
  }, []);
  const renderFile = () => {
    switch (typeOfFile) {
      case "jpg":
      case "jpeg":
      case "webp":
      case "png":
      case "avif":
        return <img src={fileURL} alt={material.title} className="img-fluid"/>;
      case "mp4":
      case "webm":
        return (
          <video controls className="img-fluid" height="200">
            <source src={fileURL} type={`video/${typeOfFile}`} />
          </video>
        );
      case "mp3":
      case "ogg":
        return (
          <audio controls width = "400">
            <source src={fileURL} type={`audio/${typeOfFile}`} />
          </audio>
        );
      default:
        return (
          <a href={fileURL} download>
            {material.title}
          </a>
        );
    }
  };
  return (
    <li key={material._id}>
      {isFetched ? (
        <Loader />
      ) : (
        <div>
          <h2>{material.title}</h2>
          <p>{material.description}</p>
          <div className={styles.photo_container}>{material.url_of_file !== "" && renderFile()}</div>
        </div>
      )}
    </li>
  );
};

export default UserMaterialCard;