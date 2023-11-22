import React from "react";
import styles from "./ChangeUserRoleForm.module.css";
import { useState } from "react";
import axios from "axios";
const ChangeUserRoleForm = () => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setFormData] = useState({
    username: "",
    role: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch("http://localhost:5000/api/user/changeUserRole", {
        username: formData.username,
        role: formData.role,
      });
    } catch (error) {
        
    }
  };
  return (
    <form className={styles.myForm} onSubmit={handleSubmit}>
      <input
        className={styles.myInput}
        type="text"
        placeholder="Nickname"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />
      <select
        id="role"
        name="role"
        className="form-select mt-3"
        onChange={handleInputChange}
        value={formData.role}
        required
      >
        <option value="">Виберіть категорію</option>
        <option value="user">Звичайний корстувач</option>
        <option value="courseModerator">Модератор курсу</option>
        <option value="siteManager">Менеджер</option>
      </select>
      <div className="text-center">
        <button className={styles.myButton}>Change role</button>
      </div>
    </form>
  );
};

export default ChangeUserRoleForm;
