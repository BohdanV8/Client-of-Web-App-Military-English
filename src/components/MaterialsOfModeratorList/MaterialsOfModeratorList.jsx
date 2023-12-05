import React from "react";
import MaterialOfModeratorCard from "../MaterialOfModeratorCard/MaterialOfModeratorCard";
import styles from "./MaterialsOfModeratorList.module.css";
const MaterialsOfModeratorList = ({ materials, setUpdateList, updateList }) => {
  return (
    <ul className={styles.materialList}>
      {materials.length === 0 && (
        <h1 className={`container text-center ${styles.notFound}`}>
          Навчальних матеріалів не знайдено
        </h1>
      )}
      {materials.map((material) => (
        <MaterialOfModeratorCard
          key={material._id}
          material={material}
          setUpdateList={setUpdateList}
          updateList={updateList}
        />
      ))}
    </ul>
  );
};

export default MaterialsOfModeratorList;
