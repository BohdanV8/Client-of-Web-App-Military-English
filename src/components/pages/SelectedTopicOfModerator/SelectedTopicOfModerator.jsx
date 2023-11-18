import React, { useState } from "react";
import MyModal from "../../UI/MyModal/MyModal";
import Logo from "../../../images/icons8-english-50.png";
import styles from "./SelectedTopicOfModerator.module.css";
import MaterialForm from "../../MaterialForm/MaterialForm";
const SelectedTopicOfModerator = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <MyModal visible={visible} setVisible={setVisible}>
        <MaterialForm />
      </MyModal>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img src={Logo} alt="Logo" />
            <div className="px-3 navbar-brand">
              <h2 className={styles.logoText}>
                Military <span>English</span>
              </h2>
            </div>
          </div>

          {/* <div className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <div className="input-group">
              <select
                className="form-select"
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                <option value={-1}>від новіших до старіших</option>
                <option value={1}>від старіших до новіших</option>
              </select>
              <button type="button" className="btn btn-outline-primary">
                Sort
              </button>
            </div>
          </div> */}
          <div className="col-md-3 text-end">
            <button
              type="button"
              className={styles.my_button}
              onClick={() => {
                setVisible(true);
              }}
            >
              <h5>Додати матеріал до розділу</h5>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default SelectedTopicOfModerator;