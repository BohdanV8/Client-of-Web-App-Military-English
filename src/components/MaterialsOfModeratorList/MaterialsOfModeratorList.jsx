import React from "react";
import MaterialOfModeratorCard from "../MaterialOfModeratorCard/MaterialOfModeratorCard";
import styles from "./MaterialsOfModeratorList.module.css"
const MaterialsOfModeratorList = ({ materials }) => {
  return (
    <ul className={styles.materialList}>
      {materials.map((material) => (
        <MaterialOfModeratorCard material = {material}/>
      ))}
    </ul>
  );
};

export default MaterialsOfModeratorList;
