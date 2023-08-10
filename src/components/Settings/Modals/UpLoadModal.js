import React from "react";
import Card from "../../Analytics/CardStyles/Card";
import styles from "./UpLoadModal.scss";

const Modal = (props) => {
  return (
    <div>
      <div onClick={props.onClose} className={styles.backdrop}/>
      <Card className={styles.modal}>
        <form method="POST">
          <label className={styles.header}>Choose Image</label>
          <input type="file" className={styles.content} />
          <footer>
            <button className={styles.actions} onClick={props.onConfirm}>Save </button>
          </footer>
        </form>
      </Card>
    </div>
  );
};

export default Modal;
