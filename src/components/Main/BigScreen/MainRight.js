import React from "react";
import styles from "./MainRight.module.scss";
import userImage from "../Head/self3.jpg";

import ProjectTimeTracker from "../Head/ProjectTimeTracker";
import Calender from "../Calender/Calender";
import Notifications from "../Head/Notifications";

const BigScreenHead = () => {
  const tasks = [
    {
      _id: 1,
      title: "Doctor",
      description: "Go to the doctor",
      status: 50,
      dateToDo: "10/08/2023",
      starttime:"12:30",
      endtime:"3:18",
      collaboration:"McDonald"
    },
    {
      _id: 2,
      title: "Run",
      description: "Go for a run",
      status: 0,
      dateToDo: "7/08/2023",
      starttime:"12:30",
      endtime:"3:13",
      collaboration:"McDonald"

    },
    {
      _id: 3,
      title: "Go Grocery",
      description: "Go buy food",
      status: 30,
      dateToDo: "07/08/2023",
      starttime:"12:00",
      endtime:"3:00",
      collaboration:"McDonald"
    },
    {
      _id: 4,
      title: "Fix the car",
      description: "get tires",
      status: 40,
      dateToDo: "08/08/2023",
      starttime:"12:00",
      endtime:"3:00",
      collaboration:"McDonald"
    },
    {
      _id: 5,
      title: "Fix the car",
      description: "get tires",
      status: 40,
      dateToDo: "09/08/2023",
      starttime:"12:30",
      endtime:"3:00",
      collaboration:"McDonald"
    },
  ];

  return (
    <div className={styles.MainRight}>
      <div className={styles.Headtop}>
        <img className={styles.profile} src={userImage} alt="profileimage" />
        <Notifications />
        
      </div>
      <ProjectTimeTracker />
      <Calender tasks={tasks} />
    </div>
  );
};

export default BigScreenHead;
