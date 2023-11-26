import React, { useEffect } from "react";
import Logo from "../../../images/icons8-english-50.png";
import styles from "./ManagerPage.module.css";
import { useState } from "react";
import MyModal from "../../UI/MyModal/MyModal";
import CategoryForm from "../../CategoryForm/CategoryForm";
import { useNavigate } from "react-router-dom";
import ChangeUserRoleForm from "../../ChangeUserRoleForm/ChangeUserRoleForm";
import useCategories from "../../../hooks/useCategories";
import CategoryList from "../../CategoryList/CategoryList";
import axios from "axios";
import UserList from "../../UsersList/UsersList";
const ManagerPage = () => {
  const { categories, updateCategories } = useCategories();
  const [users, setUsers] = useState([]);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [roleVisible, setRoleVisible] = useState(false);
  const [update, setUpdate] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:5000/api/user/all");
      setUsers(response.data);
    };
    fetchUsers();
  }, [update]);
  return (
    <div className="container">
      <MyModal visible={categoryVisible} setVisible={setCategoryVisible}>
        <CategoryForm updateCategories={updateCategories} />
      </MyModal>
      <MyModal visible={roleVisible} setVisible={setRoleVisible}>
        <ChangeUserRoleForm update={update} setUpdate={setUpdate} />
      </MyModal>
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
          <button
            type="button"
            className={`${styles.my_button} mx-4`}
            onClick={() => {
              setCategoryVisible(true);
            }}
          >
            <h5>Добавити категорію</h5>
          </button>
          <button
            type="button"
            className={`${styles.my_button} mx-2`}
            onClick={() => {
              setRoleVisible(true);
            }}
          >
            <h5>Змінити роль користувача</h5>
          </button>
        </div>

        <div className="col-md-3 text-end">
          <button
            type="button"
            className={styles.my_button}
            onClick={() => {
              navigate("/courses");
            }}
          >
            <h5>Переглянути курси</h5>
          </button>
        </div>
      </header>
      <div className="container mt-5">
        <CategoryList
          categories={categories}
          updateCategories={updateCategories}
        />
      </div>
      <div className="container mt-5">
        <UserList users={users} update={update} setUpdate={setUpdate} />
      </div>
    </div>
  );
};

export default ManagerPage;
