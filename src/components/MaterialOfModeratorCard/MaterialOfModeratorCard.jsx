import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../UI/Loader/Loader";
import MaterialUpdateForm from "../MaterialUpdateForm/MaterialUpdateForm";
import MyModal from "../UI/MyModal/MyModal";
import { useContext } from "react";
import { UserRoleContext } from "../../context/myContext";
const MaterialOfModeratorCard = ({ material, setUpdateList, updateList }) => {
  const [fileURL, setFileURL] = useState("");
  const [isFetched, setIsFetched] = useState(true);
  const [typeOfFile, setTypeOfFile] = useState();
  const [visible, setVisible] = useState(false);
  const { userRole } = useContext(UserRoleContext);
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
  }, [material.url_of_file]);
  const deleteMaterial = async (id) => {
    await axios.delete(`http://localhost:5000/api/materials/delete/${id}`);
    var new_render = updateList + 1;
    setUpdateList(new_render);
  };
  const renderFile = () => {
    switch (typeOfFile) {
      case "jpg":
      case "jpeg":
      case "webp":
      case "png":
      case "avif":
        return <img src={fileURL} alt={material.title} className="img-fluid" />;
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
          <audio controls width="400">
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
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <MaterialUpdateForm
          id={material._id}
          setUpdateList={setUpdateList}
          updateList={updateList}
        />
      </MyModal>
      <li key={material._id}>
        {isFetched ? (
          <Loader />
        ) : (
          <div>
            <h2>{material.title}</h2>
            <p>{material.description}</p>
            <div className="row container">
              <div className={`col-md-9`}>
                {material.url_of_file !== "" && renderFile()}
              </div>
              {userRole === "courseModerator" && (
                <div className="col-md-3">
                  <div className="row">
                    <button
                      type="button"
                      className={`btn btn-outline-primary`}
                      onClick={() => {
                        setVisible(true);
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div className="row mt-3">
                    <button
                      type="button"
                      className={`btn btn-outline-primary`}
                      onClick={() => {
                        deleteMaterial(material._id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </li>
    </div>
  );
};

export default MaterialOfModeratorCard;
