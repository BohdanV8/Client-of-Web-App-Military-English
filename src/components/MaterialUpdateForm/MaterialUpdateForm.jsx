import React from "react";
import styles from "./MaterialUpdateForm.module.css";
import { useState } from "react";
import axios from "axios";
const MaterialUpdateForm = ({ id, setUpdateList, updateList }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.patch(
      `http://localhost:5000/api/materials/updateMaterial/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    var newUpdate = updateList + 1;
    setUpdateList(newUpdate);
  };
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
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
  });

  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <input
        className={styles.myInput}
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
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
        <button className={styles.myButton}>Update</button>
      </div>
    </form>
  );
};

export default MaterialUpdateForm;
