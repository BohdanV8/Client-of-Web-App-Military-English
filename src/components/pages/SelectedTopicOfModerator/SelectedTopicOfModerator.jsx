import React, { useState } from "react";
import MyModal from "../../UI/MyModal/MyModal";
import Logo from "../../../images/icons8-english-50.png";
import styles from "./SelectedTopicOfModerator.module.css";
import MaterialForm from "../../MaterialForm/MaterialForm";
import { useEffect } from "react";
import axios from "axios";
import MaterialsOfModeratorList from "../../MaterialsOfModeratorList/MaterialsOfModeratorList";
const SelectedTopicOfModerator = () => {
  const topicString = localStorage.getItem("selectedTopic");
  const topicObject = JSON.parse(topicString);
  const [materials, setMaterials] = useState([]);
  const [visible, setVisible] = useState(false);
  const [updateList, setUpdateList] = useState(0);
  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/materials/byTopic/${topicObject._id}`
        );
        setMaterials(response.data);
      } catch (error) {
        console.error('Error fetching materials:', error);
      }
    };

    fetchMaterials();
  }, [updateList]);
  return (
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <MaterialForm setVisible = {setVisible} setUpdateList = {setUpdateList} updateList = {updateList}/>
      </MyModal>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Logo} alt="Logo" />
            <div className="px-3 navbar-brand">
              <h2 className={styles.logoText}>
                Military <span>English</span>
              </h2>
            </div>
          </div>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className={styles.my_button}
              onClick={() => {
                setVisible(true);
              }}
            >
              <h5>Додати матеріал до розділу</h5>
            </button>
          </div>
        </header>
      </div>
      <div className="container text-center">
        <h1 className={styles.title}>{topicObject.title}</h1>
      </div>
      <div className="container text-center mt-4">
        {topicObject.description && <h2 className={styles.description}>{topicObject.description}</h2>}
      </div>
      <div className="container mt-4 mb-4">
        <MaterialsOfModeratorList materials = {materials}/>
      </div>
    </div>
  );
};

export default SelectedTopicOfModerator;
