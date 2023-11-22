import { useState, useEffect } from "react";
import axios from "axios";

const useModeratorById = (id) => {
  const [moderatorById, setModeratoryById] = useState();

  useEffect(() => {
    const fetchModerator = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/byId/${id}`
        );
        if (response.data) {
            setModeratoryById(response.data.title);
        }
        setModeratoryById(response.data);
      } catch (error) {
        console.log("Error fetching moderator:", error);
      }
    };

    fetchModerator();
  }, []);

  return moderatorById;
};

export default useModeratorById;
