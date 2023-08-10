import React,{useState} from "react";
import ViewTaskModal from "../../../Ui/ViewTaskModal";
import styles from  "./TaskItemCalendar.module.scss";

const TaskItem = (props) => {
    const [viewModal,setViewModal]=useState(false);

    const openViewModalHandler=()=>{
      setViewModal(true)
    }
    const closeViewModalHandler=()=>{
      setViewModal(false)
    }
  return (
    <div>
      <div className={styles.TaskItemCalandar}>
        <p><strong>{props.title}</strong></p>
        
        <div className={styles.taskgrid}>
          <div className={styles.deadline} style={{color:"orange"}}>
            Deadline
            <p style={{color:"black"}}>{props.dateToDo}</p>
          </div>
          <div className={styles.progress} style={{color:"orange"}}>
            Progress
            <p style={{color:"black"}}>{props.status} %</p>
          </div>
          <button className={styles.selecttask} onClick={openViewModalHandler}>View</button>
        </div>
        {viewModal && <ViewTaskModal task={props} onClose={closeViewModalHandler}/>}
      </div>
    </div>
  );
};

export default TaskItem;
