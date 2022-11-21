import React from "react";
import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loading}>
      <div>
        <div className={styles.bounce}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <img src={require("../../assets/images/Pulse-1.6s-200px.gif")} alt="" /> */}
      </div>
    </div>
  );
};

export default Loader;
