import React from "react";
import styles from "./TopicForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const TopicForm = () => {
  const navigate = useNavigate();
  const courseString = localStorage.getItem("selectedCourse");
  const courseObject = JSON.parse(courseString);
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
    id_of_course: courseObject._id,
    title: "",
    description: "",
    file: null,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:5000/api/topics/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const someTopic = response.data.topic;
    const jsonString = JSON.stringify(someTopic);
    localStorage.setItem("selectedTopic", jsonString);
    navigate("/selectedTopicOfModerator");
  };
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
          Choose image for this topic
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
      <div className="text-center">
        <button className={styles.myButton}>Create</button>
      </div>
    </form>
  );
};

export default TopicForm;
