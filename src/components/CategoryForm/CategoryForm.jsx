import React from "react";
import styles from "./CategoryForm.module.css";
import { useState } from "react";
import axios from "axios";
const CategoryForm = ({updateCategories}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { title: title };
    await axios.post("http://localhost:5000/api/categories/create", requestData);
    await updateCategories();
  };
  const [title, setTitle] = useState("");
  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <input
        className={styles.myInput}
        type="text"
        placeholder="Category title"
        name="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title)
        }}
        required
      />
      <div className="text-center">
        <button className={styles.myButton}>Create category</button>
      </div>
    </form>
  );
};

export default CategoryForm;
