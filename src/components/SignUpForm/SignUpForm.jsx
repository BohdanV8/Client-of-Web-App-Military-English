import React from "react";
import styles from "./SignUpForm.module.css";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserRoleContext } from "../../context/myContext";
const SignUpForm = ({ setIsAccountExist }) => {
  const { setUserRole } = useContext(UserRoleContext);
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Відправка POST-запиту на сервер
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", formData.name);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      localStorage.setItem("userRole", response.data.userRole);
      setUserRole(response.data.userRole);
      if (response.data.userRole === "user") {
        navigate("/userPage");
      } else if (response.data.userRole === "courseModerator") {
        navigate("/courseModeratorPage");
      } else if (response.data.userRole === "siteManager") {
        navigate("/ManagerPage");
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
      setError("Помилка реєстрації");
    }
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    surname: "",
    middlename: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <h1 className={styles.signUpError}>{error}</h1>
      <input
        className={styles.myInput}
        type="text"
        placeholder="Nickname"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      <input
        className={styles.myInput}
        type="password"
        placeholder="Password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />
      <input
        className={styles.myInput}
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        className={styles.myInput}
        type="text"
        placeholder="Surname"
        name="surname"
        value={formData.surname}
        onChange={handleInputChange}
      />
      <input
        className={styles.myInput}
        type="text"
        placeholder="Middlename"
        name="middlename"
        value={formData.middlename}
        onChange={handleInputChange}
      />
      <div className="text-center">
        <button className={styles.myButton}>Sign up</button>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            setIsAccountExist(true);
          }}
        >
          Have an account? Sign in!
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
