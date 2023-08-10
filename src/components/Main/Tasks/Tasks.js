import React, { useState } from "react";
import styles from "./Tasks.module.scss";

import Recently from "./Recently.js";
import Today from "./Today.js";
import Upcoming from "./Upcoming.js";
import Later from "./Later.js";
//import Today from './Today';

const Tasks = () => {
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
      dateToDo: "08/07/2023",
    },
    {
      _id: 4,
      title: "Fix the car",
      description: "get tires",
      progress: 40,
      dateToDo: "08/07/2023",
    },
  ];
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
        <span onClick={() => changeTaskUi("recently")}>Recently</span>
        <span onClick={() => changeTaskUi("today")}>Today</span>
        <span onClick={() => changeTaskUi("upcoming")}>Upcoming</span>
        <span onClick={() => changeTaskUi("later")}>Later</span>
      </div>
      {renderedUi}
    </div>
  );
};

export default Tasks;
