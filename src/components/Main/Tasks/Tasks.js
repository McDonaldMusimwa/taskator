import React, { useState } from "react";
import styles from "./Tasks.module.scss";

import Recently from "./Recently.js";
import Today from "./Today.js";
import Upcoming from "./Upcoming.js";
import Later from "./Later.js";
//import Today from './Today';
import tasks from '../../../Data/data.json'

const Tasks = () => {
  /*
  const tasks = [
    {
      _id: 1,
      title: "Doctor",
      description: "Go to the doctor",
      progress: 50,
      dateToDo: "05/07/2023",
    },
    {
      _id: 2,
      title: "Run",
      description: "Go for a run",
      progress: 0,
      dateToDo: "06/07/2023",
    },
    {
      _id: 3,
      title: "Go Grocery",
      description: "Go buy food",
      progress: 30,
      dateToDo: "08/12/2023",
    },
    {
      _id: 4,
      title: "Fix the car",
      description: "get tires",
      progress: 40,
      dateToDo: "08/11/2023",
    },
  ];

  */
  const [taskUi, setTaskUi] = useState("recently");
  const changeTaskUi = (ui) => {
    setTaskUi(ui);
    console.log(ui)
  };

  // Render the appropriate UI component based on the selected task option
  let renderedUi;
  if (taskUi === "recently") {
    renderedUi = (
      <Recently
       tasks={tasks}
       
      />
    );
  } else if (taskUi === "today") {
    renderedUi = (
      <Today
      tasks={tasks}
      />
    );
  } else if (taskUi === "upcoming") {
    renderedUi = (
      <Upcoming
      tasks={tasks}
      />
    );
  } else if (taskUi === "later") {
    renderedUi = (
      <Later
      tasks={tasks}
      />
    );
  }

  return (
    <div className={styles.TasksArea}>
      <span>
        <strong>My Tasks</strong>
      </span>
      <div className={styles.Choices}>
        <span className={styles.Day} onClick={() => changeTaskUi("recently")}>Recently</span>
        <span className={styles.Day} onClick={() => changeTaskUi("today")}>Today</span>
        <span className={styles.Day} onClick={() => changeTaskUi("upcoming")}>Upcoming</span>
        <span className={styles.Day} onClick={() => changeTaskUi("later")}>Later</span>
      </div>
      <div className={styles.TaskList}>{renderedUi}</div>
      
    </div>
  );
};

export default Tasks;
