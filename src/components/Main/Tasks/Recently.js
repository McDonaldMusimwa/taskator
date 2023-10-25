import React from "react";
import TaskItem from "./TaskItem";
import styles from "./Recently.module.scss";

const Recently = (props) => {
  return (
    <div className={styles.Tasks}>
      {props.tasks.map((tas, index) => (
        <div>
          
        <TaskItem
        
          key={tas._id}
          title={tas.title}
          description={tas.description}
          status={tas.status}
          starttime={tas.starttime}
          endtime={tas.endtime}
          backgroundClass={index % 1.5 === 0 ? 'EvenCard' : 'OddCard'}
        />
        </div>
      ))}
    </div>
  );
};

export default Recently;
