import React from "react";
import styles from "./CategoryList.module.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const CategoryList = ({ categories, updateCategories }) => {
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/categories/delete/${categoryId}`
      );
      await updateCategories();
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return (
    <div className={styles.containerForCategories}>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id}>
            {category.title}
            <div
              className={styles.buttonContainer}
              onClick={() => {
                handleDeleteCategory(category._id);
              }}
            >
              <MdDelete />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
