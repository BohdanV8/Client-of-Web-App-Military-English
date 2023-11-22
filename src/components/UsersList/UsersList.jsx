import React from "react";
import styles from "./UserList.module.css";
const UsersList = ({ users }) => {
  return (
    <div className={styles.containerForUsers}>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Username: {user.username} <br /> Role: {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
