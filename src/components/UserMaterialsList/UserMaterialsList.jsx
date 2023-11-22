import React from "react";
import MaterialOfModeratorCard from "../MaterialOfModeratorCard/MaterialOfModeratorCard";
import styles from "./UserMaterialsList.module.css"
const UserMaterialsList = ({ materials }) => {
  return (
    <ul className={styles.materialList}>
      {materials.map((material) => (
        <MaterialOfModeratorCard material = {material}/>
      ))}
    </ul>
  );
};

export default UserMaterialsList;