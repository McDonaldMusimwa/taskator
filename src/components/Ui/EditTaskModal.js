import React, { useState } from "react";
import styles from "./EditTaskModal.module.scss";
import Button from '../Ui/Button'
const EditTaskModal = ({ onClose, task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    setEditedTask({ ...task }); // Reset editedTask when toggling modes
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here, you can update the task data in your data source (e.g., database)
    // For demo purposes, we'll just log the updated task
    console.log("Updated Task:", editedTask);
    toggleEditMode();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.Modal}>
        <header className={styles.header}>
          <h2>Edit Task</h2>
        </header>
        <form
          method="POST"
          name="addtask"
          action="https://taskatar.onrender.com/task/"
          className={styles.content}
          onSubmit={handleSave}
        >
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={editedTask.title}
            className={styles.title}
            onChange={handleInputChange}
            onClick={(e) => e.stopPropagation()}
          ></input>
          <div className={styles.inputgroup}>
            <label>Date to do</label>
            <input
              name="datetodo"
              type="date"
              value={editedTask.dateToDo}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            ></input>
            <label>Collaboration</label>
            <input
              name="collaboration"
              value={editedTask.collaboration}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            ></input>
          </div>
          <div className={styles.inputgroup}>
            <label>Start time</label>
            <input
              name="starttime"
              type="time"
              value={editedTask.starttime}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            ></input>
            <label>End time</label>
            <input
              name="endtime"
              type="time"
              value={editedTask.endtime}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            ></input>
          </div>
          <div className={styles.inputgroup2}>
            <label>Description</label>
            <input
              name="description"
              type="text"
              value={editedTask.description}
              onChange={handleInputChange}
              onClick={(e) => e.stopPropagation()}
            ></input>
          </div>
          <label
            onChange={handleInputChange}
            value={editedTask.status}
            onClick={(e) => e.stopPropagation()}
          >
            Completion status
             <input type="range" id="points" name="points" min="0" max="10"/>
          </label>

          <Button onClick={handleSave}> Changes</Button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
