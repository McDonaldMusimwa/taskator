import React from "react";
import styles from "./MainRight.module.scss";
import userImage from "../Head/self3.jpg";

import ProjectTimeTracker from "../Head/ProjectTimeTracker";
import Calender from "../Calender/Calender";
import Notifications from "../Head/Notifications";

const BigScreenHead = (props) => {
 

  return (
    <div className={styles.MainRight}>
      <div className={styles.Headtop}>
        <img className={styles.profile} src={userImage} alt="profileimage" />
        <Notifications />
        
      </div>
      <ProjectTimeTracker />
      <Calender tasks={props.tasks} />
    </div>
  );
};

export default BigScreenHead;
