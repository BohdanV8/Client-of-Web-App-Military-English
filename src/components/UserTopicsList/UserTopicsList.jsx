import React from "react";
import styles from "./UserTopicsList.module.css";
import UserTopicCard from "../UserTopicCard/UserTopicCard";
const UserTopicsList = ({topics}) => {
  return (
    <div className={styles.cardContainer}>
      {topics.length === 0 && (
        <h2 className={`container text-center ${styles.notFound}`}>
          Розділів до курсу не знайдено
        </h2>
      )}
      {topics.map((topic) => (
        <UserTopicCard key={topic._id} topic={topic} />
      ))}
    </div>
  );
};

export default UserTopicsList;
