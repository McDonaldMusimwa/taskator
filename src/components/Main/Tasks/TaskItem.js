import React from "react";
import { LinearProgress } from "@mui/material";
import  "./TaskItem.scss";

const TaskItem = (props) => {
 

  return (
    <div className={`${props.backgroundClass} ${'CardContainer'} `}>
      <span>
        <strong>{props.title}</strong>
      </span>

      <span>Task:{props.description}</span>
      <span>progress: {props.status}%</span>
      <span>startTime:{props.starttime} <br></br> endTime:{props.endtime}</span>
      <LinearProgress variant="determinate" value={props.status} />
    </div>
  );
};

export default TaskItem;
