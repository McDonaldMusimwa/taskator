import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProjectTimeTracker.module.scss";
const ProjectTimeTracker = () => {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        
        <strong><span>Project time tracker</span></strong>
        <p>You can start tracking </p>
      </div>
      <FontAwesomeIcon className={styles.playbutton} icon={faPlay} />
    </div>
  );
};

export default ProjectTimeTracker;
