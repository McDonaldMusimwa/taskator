import React from "react";
import MainLeft from "./BigScreen/MainLeft";
import MainRight from "./BigScreen/MainRight";
import styles from "./BigScreenMain.module.scss";
import tasks from '../../Data/data.json'

const BigScreenMain = () => {




  return (
    <div className={styles.Main}>
      <div className={styles.Left}>
        <MainLeft />
      </div>
      <div className={styles.Right}>
        <MainRight tasks={tasks} />
      </div>
    </div>
  );
};

export default BigScreenMain;
