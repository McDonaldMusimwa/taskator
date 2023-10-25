import React, { useState } from "react";
import styles from "./ProfileName.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ChangeName from "../Modals/ChangeName";
import ChangeEmail from "../Modals/ChangeEmail";

const ProfileName = () => {
  const data = { name: "Jekwaleni", email: "mcdonald.musimwa@yahoo.com" };
  const [showModal, setShowModal] = useState(null);

  const openModalHandler = (modalType) => {
    setShowModal(modalType);
  };

  const closeModalHandler = () => {
    setShowModal(null);
    console.log("Close");
  };

  return (
    <div>
      <div className="Card-Name">
        <span className="span">Name: {data.name}</span>
        <span className="span">Email: {data.email}</span>
      </div>
      <div className={styles.Edit}>
        <span onClick={() => openModalHandler("name")}>
          <FontAwesomeIcon icon={faUserPen} values="ChangeName" />
          Change Name
        </span>

        <span onClick={() => openModalHandler("email")}>
          <FontAwesomeIcon icon={faEnvelope} values="ChangeEmail" />
          Change Email
        </span>
      </div>

      {showModal === "name" && <ChangeName onClose={closeModalHandler} />}
      {showModal === "email" && <ChangeEmail onClose={closeModalHandler} />}
    </div>
  );
};

export default ProfileName;
