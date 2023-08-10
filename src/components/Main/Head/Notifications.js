import React from "react";
import {
  faBell,
  faEnvelope,
 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Notification.module.scss';

const Notifications = () => {
  return (
    <div >
      <ul className={styles.div}>
        <li>
          <a href="auifbdliuqW">
            <FontAwesomeIcon icon={faBell} />
          </a>
        </li>
        <li>
          <a href="AWFBDYWEkbc">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
