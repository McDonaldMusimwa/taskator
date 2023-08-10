import React from "react";
import TaskItem from "./TaskItem";
import styles from './Recently.module.scss';
const Recently = (props) => {
 
  return (
    <div className={styles.Tasks}>
      {props.tasks.map((tas) => (
        <TaskItem key={tas._id}
        title={tas.title}
        description={tas.description}
        status={tas.progress} />
      ))}
    </div>
  );
};

export default Recently;
