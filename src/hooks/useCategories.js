import { useState, useEffect } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categories/all"
        );
        setCategories(response.data);
      } catch (error) {
        console.log("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const updateCategories = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/categories/all"
      );
      setCategories(response.data);
    } catch (error) {
      console.error('Error updating categories:', error);
    }
  };

  return {categories, updateCategories};
};

export default useCategories;
