import { useState, useEffect } from "react";
import axios from "axios";

const useCategoryById = (id) => {
  const [categoryById, setcategoryById] = useState();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/categories/byId/${id}`
        );
        if (response.data) {
          setcategoryById(response.data.title);
        }
      } catch (error) {
        console.log("Error fetching category:", error);
      }
    };

    fetchCategory();
  }, []);

  return categoryById;
};

export default useCategoryById;
