import React from "react";
import styles from "./TopicsOfModeratorList.module.css";
import TopicOfModeratorCard from "../TopicOfModeratorCard/TopicOfModeratorCard";
const TopicsOfModeratorList = ({ topics }) => {
  return (
    <div className={styles.cardContainer}>
      {topics.length === 0 && (
        <h2 className={`container text-center ${styles.notFound}`}>
          Розділів до курсу не знайдено
        </h2>
      )}
      {topics.map((topic) => (
        <TopicOfModeratorCard key={topic._id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicsOfModeratorList;
