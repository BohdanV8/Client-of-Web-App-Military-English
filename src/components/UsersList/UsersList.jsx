import React from "react";
import styles from "./UserList.module.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const UsersList = ({ users, update, setUpdate }) => {
  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/delete/${id}`);
      const new_render = update + 1;
      setUpdate(new_render);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <div className={styles.containerForUsers}>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Username: {user.username} <br /> Role: {user.role}
            <div
              className={styles.buttonContainer}
              onClick={() => {
                handleDeleteUser(user._id);
              }}
            >
              <MdDelete />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
