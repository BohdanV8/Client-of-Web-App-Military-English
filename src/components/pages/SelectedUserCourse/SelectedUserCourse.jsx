import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../../images/icons8-english-50.png";
import styles from "./SelectedUserCourse.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UserTopicsList from "../../UserTopicsList/UserTopicsList";
const SelectedUserCourse = () => {
  const [topics, setTopics] = useState([]);
  const courseString = localStorage.getItem("selectedCourse");
  const courseObject = JSON.parse(courseString);
  useEffect(() => {
    // let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/topics/allTopicsOfCourse/${courseObject._id}`
        );
        // if (isMounted) {
        setTopics(response.data);
        // }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchData();
    // return () => {
    //   isMounted = false;
    // };
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Logo} alt="Logo" />
            <div className="px-3 navbar-brand">
              <h2 className={styles.logoText}>
                Military <span>English</span>
              </h2>
            </div>
          </div>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className={styles.my_button}
              onClick={() => {
                navigate("/userPage");
              }}
            >
              <h5>Вибрати інший курс</h5>
            </button>
          </div>
        </header>
      </div>

      <div className="container text-center">
        <UserTopicsList topics={topics} />
      </div>
    </div>
  );
};

export default SelectedUserCourse;
