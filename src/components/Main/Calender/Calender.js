import React, { useState } from "react";
import Head from "./Head";
import WeeklyCalender from "./WeeklyCalender";

import TaskItem from "./TaskItem/TaskItemCalendar";

const Calender = (props) => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;

  const [selectedDay, setselectedDay] = useState(formattedDate);

  const filteredTasks = props.tasks.filter((task) => {
    return task.dateToDo.toString() === selectedDay;
  });

  const filterChangeHandler = (selectedDate) => {
    setselectedDay(selectedDate);
  };

  return (
    
    <div>
      <Head />
      <WeeklyCalender date={selectedDay} onDateChange={filterChangeHandler} />
      {filteredTasks.map((task) => (
        <TaskItem
          key={task._id}
          title={task.title}
          dateToDo={task.dateToDo}
          status={task.status}
          startTime={task.starttime}
          endTime={task.endtime}
          collaboration={task.collaboration}
          description={task.description}
        />
      ))}
    </div>
  );
};

export default Calender;
