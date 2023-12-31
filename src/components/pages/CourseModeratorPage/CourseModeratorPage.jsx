import React, { useEffect, useState } from "react";
import styles from "./CourseModeratorPage.module.css";
import Logo from "../../../images/icons8-english-50.png";
import MyModal from "../../UI/MyModal/MyModal";
import CourseForm from "../../CourseForm/CourseForm";
import useCategories from "../../../hooks/useCategories";
import CoursesOfModeratorList from "../../CoursesOfModeratorList/CoursesOfModeratorList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CourseModeratorPage = () => {
  const navigate = useNavigate();
  const { categories } = useCategories();
  const [visible, setVisible] = useState(false);
  const [courses, setCourses] = useState([]);
  const [searchString, setSerarchString] = useState("");
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(
          "http://localhost:5000/api/courses/allCoursesOfModerator"
        );

        if (isMounted) {
          setCourses(response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [update]);

  const search = async () => {
    try {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get(
        "http://localhost:5000/api/courses/wantedModeratorCourses",
        {
          params: {
            category: SelectedCategory,
            searchString,
          },
        }
      );
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };
  return (
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <CourseForm />
      </MyModal>
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

          <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search courses"
                aria-label="Search"
                aria-describedby="search-addon"
                value={searchString}
                onChange={(e) => {
                  setSerarchString(e.target.value);
                }}
              />
              <select
                className="form-select"
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  search();
                }}
              >
                Search
              </button>
            </div>
          </div>

          <div className="col-md-3 text-end">
            <button
              type="button"
              className={styles.my_button}
              onClick={() => {
                setVisible(true);
              }}
            >
              <h5>Додати курс</h5>
            </button>
          </div>
        </header>
      </div>
      <div className="text-center mt-3">
        <h1 className={styles.greeting}>
          Ласкаво просимо {localStorage.getItem("userName")}
        </h1>
        <div className="container mt-3">
          <p className={styles.description}>
            Тут ви можете керувати своїми курсами та додавати нові навчальні
            матеріали. Досліджуйте свої можливості і не соромтеся
            експерементувати та покращувати навчальний досвід для своїх учнів.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <CoursesOfModeratorList
          courses={courses}
          setUpdate={setUpdate}
          update={update}
        />
      </div>
      <div className="container text-center mt-2 mb-5">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            navigate("/");
          }}
        >
          <h5 className={styles.go}>Перейти на головну сторінку</h5>
        </button>
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            navigate("/courses");
          }}
        >
          <h5 className={styles.go}>Переглянути інші курси</h5>
        </button>
      </div>
    </div>
  );
};

export default CourseModeratorPage;
