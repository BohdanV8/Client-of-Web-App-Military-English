import React, { useEffect } from "react";
import styles from "./CoursesPage.module.css";
import Logo from "../../../images/icons8-english-50.png";
import { useState } from "react";
import useCategories from "../../../hooks/useCategories";
import { UserRoleContext } from "../../../context/myContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AllCoursesList from "../../AllCoursesList/AllCoursesList";
import UnsubscribedCoursesList from "../../UnsubscribedCoursesList/UnsubscribedCoursesList";
const CoursesrPage = () => {
  const navigate = useNavigate();
  const {categories} = useCategories();
  const [searchString, setSerarchString] = useState("");
  const [SelectedCategory, setSelectedCategory] = useState("");
  const [courses, setCourses] = useState([]);
  const { userRole } = useContext(UserRoleContext);
  const [update, setUpdate] = useState(0);
  useEffect(() => {
    const getAllCourses = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/courses/allCourses"
      );
      setCourses(response.data);
    };
    const getUnsubscribedCourses = async () => {
      const token = localStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.get(
        "http://localhost:5000/api/courses/unsubscribedCourses"
      );
      setCourses(response.data);
    };

    if (userRole === "user") {
      getUnsubscribedCourses();
    } else {
      getAllCourses();
    }
  }, [update]);
  const search = async () => {
    if (userRole === "user") {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/courses/sortedUnsubscribedCourses",
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
    } else {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/courses/allSortedCourses",
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
    }
  };
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

          <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <div className="input-group">
              <input
                type="search"
                className="form-control rounded"
                placeholder="By username"
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
                if (userRole === "user") {
                  navigate("/userPage");
                } else if (userRole === "courseModerator") {
                  navigate("/courseModeratorPage");
                } else if (userRole === "siteManager") {
                  navigate("/ManagerPage");
                } else {
                  navigate("/");
                }
              }}
            >
              <h5>Go home</h5>
            </button>
          </div>
        </header>
      </div>
      {!userRole && (
        <h2 className={`container text-center mt-4 ${styles.greeting}`}>
          Для того, щоб мати доступ до курсів ви повинні авторизуватися
        </h2>
      )}
      {userRole === "user" ? (
        <div>
          <h2 className={`container text-center mt-4 ${styles.greeting}`}>
            Тут ви можете переглядати курси та підписатися на ті, які вас
            цікавлять
          </h2>
          <div className="container">
            <UnsubscribedCoursesList
              courses={courses}
              update={update}
              setUpdate={setUpdate}
            />
          </div>
        </div>
      ) : (
        <div className="container text-center">
          <AllCoursesList courses={courses} />
        </div>
      )}
      <div className="container text-center">
        <button
          type="button"
          class="btn btn-link mt-5"
          onClick={() => {
            navigate("/");
          }}
        >
          <h5 className={styles.go}>Перейти на головну сторінку</h5>
        </button>
      </div>
    </div>
  );
};

export default CoursesrPage;
