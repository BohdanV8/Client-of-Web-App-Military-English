import React from "react";
import styles from "./CourseForm.module.css";
import { useState } from "react";
import useCategories from "../../hooks/useCategories";
import axios from "axios";
const CourseForm = () => {
  const categories = useCategories();
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
    const response = axios.post("http://localhost:5000/api/courses/create", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    })
    // console.log(response.data.course)
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
    category: "",
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
      <div className="mb-3 mt-2">
        <label htmlFor="formFile" className="form-label">
          Choose image for this course
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="category">Select a category:</label>
        <select
          id="category"
          name="category"
          className="form-select"
          onChange={handleInputChange}
          value={formData.category}
          required
        >
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <button className={styles.myButton}>Create</button>
      </div>
    </form>
  );
};

export default CourseForm;
