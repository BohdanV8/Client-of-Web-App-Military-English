import React from "react";
import styles from "./MaterialForm.module.css";
import { useState } from "react";
import axios from "axios";
const MaterialForm = ({setVisible , setUpdateList,updateList}) => {
  const topicString = localStorage.getItem("selectedTopic");
  const topicObject = JSON.parse(topicString);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleTextareaChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file: file });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/materials/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    var newUpdate = updateList + 1;
    setUpdateList(newUpdate);
    hideModal()
  };
  const [formData, setFormData] = useState({
    id_of_topic: topicObject._id,
    title: "",
    description: "",
    file: null,
  });

  const hideModal = () => {
    setVisible(false)
  }
  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <input
        className={styles.myInput}
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        required
      />
      <textarea
        className={styles.MyTextarea}
        value={formData.description}
        onChange={handleTextareaChange}
        rows={5}
        cols={50}
        placeholder="Description"
      />
      <div className="mb-3 mt-2">
        <label htmlFor="formFile" className="form-label">
          Choose material
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={handleImageChange}
        />
      </div>
      <div className="text-center">
        <button className={styles.myButton}>Create</button>
      </div>
    </form>
  );
};

export default MaterialForm;
