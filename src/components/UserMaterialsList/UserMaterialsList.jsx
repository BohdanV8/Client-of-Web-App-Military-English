import React from "react";
import MaterialOfModeratorCard from "../MaterialOfModeratorCard/MaterialOfModeratorCard";
import styles from "./UserMaterialsList.module.css";
const UserMaterialsList = ({ materials }) => {
  return (
    <ul className={styles.materialList}>
      {materials.length === 0 && (
        <h2 className="container text-center">
          Матеріалів до розділу не знайдено
        </h2>
      )}
      {materials.map((material) => (
        <MaterialOfModeratorCard material={material} />
      ))}
    </ul>
  );
};

export default UserMaterialsList;
