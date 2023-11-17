import React from "react";
import styles from "./CourseForm.module.css";
import { useState } from "react";
const CourseForm = ({ setIsAccountExist }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleTextareaChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
      <div class="mb-3 mt-2">
        <label for="formFile" class="form-label">
          Choose image for this course
        </label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          accept="image/*"
        />
      </div>
      <div className="text-center">
        <button className={styles.myButton}>Create</button>
      </div>
    </form>
  );
};

export default CourseForm;
