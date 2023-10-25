import React from "react";
import styles from "./Recently.module.scss";
import TaskItem from "./TaskItem";

const Today = (props) => {
  return (
    <div className={styles.Tasks}>
      {props.tasks.map((tas, index) => (
        <div
          key={tas._id}
          
        >
          <TaskItem
            title={tas.title}
            description={tas.description}
            status={tas.status}
            starttime={tas.starttime}
            endtime={tas.endtime}
            backgroundClass={index % 2 === 0 ? 'EvenCard' : 'OddCard'}
          />
        </div>
      ))}
    </div>
  );
};

export default Today;
