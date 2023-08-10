import React, { useState } from "react";
import styles from  "./Head.module.scss";
import AddTasks from "../AddTasks/AddTasksModal";
const Head = () => {
  const [showModal,setShowModal]=useState(false);
  const addTaskModalHandler=()=>{
    setShowModal(true)
  }
  const closeModalHandler = () => {
    setShowModal(false);
  };
  
  const date = new Date().toDateString();
  return (
    <div className={styles.CalendarHead}>
      <div>
        <p style={{ color: "gray" }}>{date}</p>
        <p style={{ fontSize: "30px", marginTop: "0px" }}>
          <strong>Today</strong>
        </p>
      </div>
      <button className={styles.addbutton} onClick={addTaskModalHandler}>+ Add Task</button>
      {showModal && <AddTasks onClose={closeModalHandler} />}
    </div>
  );
};

export default Head;
