import React from "react";
import styles from "./TopicsOfModeratorList.module.css";
import TopicOfModeratorCard from "../TopicOfModeratorCard/TopicOfModeratorCard";
const TopicsOfModeratorList = ({ topics }) => {
  return (
    <div className={styles.cardContainer}>
      {topics.map((topic) => (
        <TopicOfModeratorCard key={topic._id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicsOfModeratorList;
