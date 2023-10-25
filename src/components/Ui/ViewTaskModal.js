import React, { useState } from "react";
import styles from "./ViewTaskModal.module.scss";
import EditTaskModal from "./EditTaskModal";

const ViewTaskModal = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const onClose = () => {
    setIsEditing(false);
  };

  const handleBackdropClick = (event) => {
    // Check if the clicked element is the backdrop itself
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      {!isEditing ? (
        <div className={styles.Modal}>
          <header className={styles.header}>
            <h2>{props.task.title}</h2>
          </header>
          <div className={styles.content}>
            <div className={styles.inputgroup}>
              <span>{props.task.dateToDo}</span>
              <span>{props.task.collaboration}</span>
            </div>
            <div className={styles.inputgroup}>
              <span>{props.task.starttime}</span>
              <span>{props.task.endtime}</span>
            </div>
            <span>{props.task.description}</span>
            <span>{props.task.status}</span>
          </div>
          <button onClick={toggleEditMode} className={styles.Button}>
            Edit
          </button>
        </div>
      ) : (
        <EditTaskModal onClose={onClose} task={props.task} />
      )}
    </div>
  );
};

export default ViewTaskModal;
