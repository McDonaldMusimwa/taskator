//import { useEffect } from "react";
import Calender from "./Calender/Calender";
import Head from "./Head/Head";
import Tasks from "./Tasks/Tasks";
import tasks from '../../Data/data.json'


function Main() {
  
  return (
    <div>
      <Head />
      <Tasks />
      <Calender tasks={tasks}/>
    </div>
  );
}

export default Main;
