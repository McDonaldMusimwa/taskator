import React from "react";
import HamBurger from "../Main/Head/HamBurger";
import './Analytics.scss'

import Selector from "./Calender/Selector";
import Charts from "./Charts/Charts";
import Breakdown from "./Breakdown/Breakdown";
import CollaboratorBreakdownChart from "./Collaboration/Collaboration";

const Analytics = () => {
    const tasks = [
        {
          _id: 1,
          title: "Doctor",
          description: "Go to the doctor",
          progress: 50,
          dateToDo: "03/07/2023",
          collaboration:false
        },
        {
          _id: 2,
          title: "Run",
          description: "Go for a run",
          progress: 0,
          dateToDo: "04/07/2023",
          collaboration:false
        },
        {
          _id: 3,
          title: "Go Grocery",
          description: "Go buy food",
          progress: 30,
          dateToDo: "05/07/2023",
          collaboration:false
        },
        {
          _id: 4,
          title: "Fix the car",
          description: "get tires",
          progress: 40,
          dateToDo: "06/07/2023",
          collaboration:false
        },
        {
          _id: 5,
          title: "Fix the sink",
          description: "get tires",
          progress: 40,
          dateToDo: "06/07/2023",
          collaboration:true
        },
        {
            _id: 5,
            title: "process documentation",
            description: "fix home affairs docs",
            progress: 600,
            dateToDo: "31/07/2023",
            collaboration:true
          }
      ];
  return (
    <div className="Analytics">
      <HamBurger />
      <Selector />
      <Breakdown />
      <Charts tasks={tasks} />
      <CollaboratorBreakdownChart tasks={tasks} />
    </div>
  );
};

export default Analytics;
