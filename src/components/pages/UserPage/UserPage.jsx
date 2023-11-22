import React from "react";
import Logo from "../../../images/icons8-english-50.png";
import styles from "./UserPage.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserCoursesList from "../../UserCoursesList/UserCoursesList";
const UserPage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    // let isMounted = true;

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(
          "http://localhost:5000/api/courses/subscribedCourses"
        );

        // if (isMounted) {
        //   setCourses(response.data);
        // }
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();

    // return () => {
    //   isMounted = false;
    // };
  }, [update]);
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
                navigate("/courses");
              }}
            >
              <h5>Переглянути інші курси</h5>
            </button>
          </div>
        </header>
      </div>
      <div className="container text-center mt-3">
        <h1 className={styles.greeting}>
          Ласкаво просимо {localStorage.getItem("userName")}
        </h1>
      </div>
      <p className={`container text-center mt-3 ${styles.description}`}>
        Тут ви маєте можливість цікаво та ефективно вивчати мову
      </p>
      <div className="container text-center">
        <UserCoursesList
          courses={courses}
          update={update}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default UserPage;
