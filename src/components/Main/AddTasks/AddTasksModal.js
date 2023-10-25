import React ,{useState}from "react";
import styles from "./AddTasks.module.scss";

const AddTasks = (props) => {
  const [title,setTitle]=useState("");
  const [date,setDate]=useState("");
  const [startTime,setStartTime]=useState("");
  const [endTime,setEndTime]=useState("");
  const [collaboration,setCollaboration]=useState("");
  const [description,setDescripton]=useState("");
  const [status,setStatus]=useState("");

  const addStatusHandler=(event)=>{
    setStatus(event.target.value)
  }

  const addTitleHandler = (event)=>{
    setTitle(event.target.value)
  }
  const addDateHandler=(event)=>{
    setDate(event.target.value)
  }

  const addStartTimeHandler=(event)=>{
    setStartTime(event.target.value)
  }
  const addEndTimeHandler=(event)=>{
    setEndTime(event.target.value)
  }
  const addCollaborationHandler=(event)=>{
    setCollaboration(event.target.value)
  }

  const addDescriptionHandler=(event)=>{
    setDescripton(event.target.value)
  }

  const sendTask=(event)=>{
    event.preventDefault()
    let formData ={
      title:title,
      date:date,
      startTime:startTime,
      endTime:endTime,
      description:description,
      collaboration:collaboration,
      status:status
    }
    console.log(formData)
  }

  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      <div className={styles.Modal}>
        <header className={styles.header}>
          <h2>Add Task</h2>
        </header>
        <form
          method="POST"
          name="addtask"
          action="https://taskatar.onrender.com/task/"
          className={styles.content}
          onSubmit={sendTask}
        >
          <label>Title</label>
            <input name="title" type="text" className={styles.title} onChange={addTitleHandler} onClick={(e) => e.stopPropagation()
            }></input>
          <div className={styles.inputgroup}>
            
            <label>Date to do</label>
            <input name="datetodo" type="date" onChange={addDateHandler} onClick={(e) => e.stopPropagation()} ></input>
            <label>Collaboration</label>
            <input name="collaboration" onChange={addCollaborationHandler} onClick={(e) => e.stopPropagation()} ></input>
           
            </div>
            <div className={styles.inputgroup}>
            <label>Start time</label>
            <input name="starttime" type="time" onChange={addStartTimeHandler}  onClick={(e) => e.stopPropagation()}></input>
            <label>End time</label>
            <input name="endtime" type="time" onChange={addEndTimeHandler} onClick={(e) => e.stopPropagation()}></input>
            
            </div>
          <div className={styles.inputgroup2}>
            <label>Description</label>
            <input name="description" type="text" onChange={addDescriptionHandler} onClick={(e) => e.stopPropagation()}></input>
          </div>
          <label onChange={addStatusHandler}  onClick={(e) => e.stopPropagation()}>
            Completion Status:
            <input type="range" id="points" name="points" min="0" max="10"/>
          </label>

          <button onClick={sendTask}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddTasks;
