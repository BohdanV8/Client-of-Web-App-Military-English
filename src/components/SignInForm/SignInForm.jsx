import React, { useContext } from "react";
import styles from "./SignInForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserRoleContext } from "../../context/myContext";
const SignInForm = ({ setIsAccountExist }) => {
  const { setUserRole } = useContext(UserRoleContext);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("userRole", response.data.userRole);
      setUserRole(response.data.userRole);
      console.log(response.data.userRole);
      if (response.data.userRole === "user") {
        navigate("/userPage");
      } else if (response.data.userRole === "courseModerator") {
        navigate("/courseModeratorPage");
      } else if (response.data.userRole === "siteManager") {
        navigate("/ManagerPage");
      }
    } catch (error) {
      setError("Помилка входу в акаунт");
      console.error("Error during signin:", error.message);
    }
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <h1 className={styles.signInError}>{error}</h1>
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
      <div className="text-center">
        <button className={styles.myButton}>Sign in</button>
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            setIsAccountExist(false);
          }}
        >
          Don't have an account? Create it!
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
