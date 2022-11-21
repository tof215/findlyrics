import React from "react";
import styles from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <div className={styles.ring}></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Spinner;
