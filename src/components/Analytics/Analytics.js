import React from "react";
import HamBurger from "../Main/Head/HamBurger";
import styles from './Analytics.module.scss'

import Selector from "./Calender/Selector";
import Charts from "./Charts/Charts";
import Breakdown from "./Breakdown/Breakdown";
import CollaboratorBreakdownChart from "./Collaboration/Collaboration";
import tasks from '../../Data/data.json'

const Analytics = () => {
   
  return (
    <div className={styles.Analytics}>
      <HamBurger />
      <Selector />
      <Breakdown />
      <Charts tasks={tasks} />
      <CollaboratorBreakdownChart tasks={tasks} />
    </div>
  );
};

export default Analytics;
