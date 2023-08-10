import React from "react";
import { LinearProgress } from "@mui/material";
import styles from "./TaskItem.module.scss";

const TaskItem = (props) => {

  return (
    <div className={styles.Card}>
      <p>
        <strong>{props.title}</strong>
      </p>

      <p>{props.description}</p>
      <p>progress {props.progress}%</p>
      <LinearProgress variant="determinate" value={props.status} />
    </div>
  );
};

export default TaskItem;
