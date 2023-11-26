import React, { useState, useEffect } from "react";
import Logo from "../../../images/icons8-english-50.png";
import MyModal from "../../UI/MyModal/MyModal";
import styles from "./SelectedCourseOfModerator.module.css";
import TopicForm from "../../TopicForm/TopicForm";
import TopicsOfModeratorList from "../../TopicsOfModeratorList/TopicsOfModeratorList";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SelectedCourseOfModerator = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [topics, setTopics] = useState([]);
  const courseString = localStorage.getItem("selectedCourse");
  const courseObject = JSON.parse(courseString);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/topics/allTopicsOfCourse/${courseObject._id}`
        );
        if (isMounted) {
          setTopics(response.data);
        }
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  const [selectedSort, setSelectedSort] = useState(-1);
  const sort = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/topics/sortedTopicsOfCourse/${courseObject._id}`,
      {
        params: {
          selectedSort,
        },
      }
    );
    setTopics(response.data);
  };
  return (
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <TopicForm />
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
              <select
                className="form-select"
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value={-1}>від новіших до старіших</option>
                <option value={1}>від старіших до новіших</option>
              </select>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => {
                  sort();
                }}
              >
                Sort
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
              <h5>Додати розділ до курсу</h5>
            </button>
          </div>
        </header>
      </div>
      <div className="container mt-3">
        <div className="text-center">
          <h1 className={styles.title}>{courseObject.title}</h1>
        </div>
        {courseObject.description && (
          <h2 className={styles.description}>{courseObject.description}</h2>
        )}
      </div>
      <div className="container mt-5">
        <TopicsOfModeratorList topics={topics} />
      </div>
      <div className="container text-center">
        <button
          type="button"
          class="btn btn-link mt-5"
          onClick={() => {
            navigate("/courseModeratorPage");
          }}
        >
          <h5 className={styles.go}>Перейти на сторінку своїх курсів</h5>
        </button>
      </div>
    </div>
  );
};

export default SelectedCourseOfModerator;
