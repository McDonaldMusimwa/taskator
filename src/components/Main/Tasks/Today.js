import React from "react";
import styles from  "./Today.module.scss";
import TaskItem from "./TaskItem";
const Today = (props) => {

  return (
    <div className={styles.ItemList}>
  {props.tasks.map((tas)=>
    <TaskItem key={tas._id}
    title={tas.title}
    description={tas.description}
    status={tas.progress}/>
    )}
    </div>
  );
};

export default Today;
