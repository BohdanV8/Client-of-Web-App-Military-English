import React from "react";
import styles from "./CourseUpdateForm.module.css";
import { useState } from "react";
import useCategories from "../../hooks/useCategories";
import axios from "axios";
const CourseUpdateForm = ({ id, setUpdate, update }) => {
  const { categories } = useCategories();
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
    try {
      await axios.patch(
        `http://localhost:5000/api/courses/updateCourse/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      var new_render = update + 1;
      setUpdate(new_render);
    } catch (e) {
      console.log(e);
    }
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
        >
          <option value="">Виберіть категорію</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      <div className="text-center">
        <button className={styles.myButton}>Update</button>
      </div>
    </form>
  );
};

export default CourseUpdateForm;
