import React from "react";
import styles from "./navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUserGroup,
  faFile,
  faGear,
  faChartPie,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const navData = ["Dashboad", "Analytics", "Team", "Documents", "Settings"];
  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="logo" />
      <li onClick={props.navData}>
        <Link to="/" className={styles.navLink}>
          <div className={styles.navbaritem}>
            <FontAwesomeIcon className={styles.icon} icon={faDashboard} />
            <span className={styles.hide}>{navData[0]}</span>
          </div>
        </Link>
      </li>
      <li onClick={props.navData}>
        <Link to="/analytics" className={styles.navLink}>
          <div className={styles.navbaritem}>
            <FontAwesomeIcon className={styles.icon} icon={faChartPie} />
            <span className={styles.hide}> {navData[1]}</span>
          </div>
        </Link>
      </li>
      <li onClick={props.navData}>
        <Link to="/team" className={styles.navLink}>
          <div className={styles.navbaritem}>
            <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
            <span className={styles.hide}>{navData[2]}</span>
          </div>
        </Link>
      </li>
      <li onClick={props.navData}>
        <Link to="/documents" className={styles.navLink}>
          <div className={styles.navbaritem}>
            <FontAwesomeIcon className={styles.icon} icon={faFile} />
            <span className={styles.hide}>{navData[3]}</span>
          </div>
        </Link>
      </li>
      <li onClick={props.navData}>
        <Link to="/settings" className={styles.navLink}>
          <div className={styles.navbaritem}>
            <FontAwesomeIcon className={styles.icon} icon={faGear} />
            <span className={styles.hide}>{navData[4]}</span>
          </div>
        </Link>
      </li>
      <li onClick={props.onLogout}>
        <div className={styles.navbaritem}>
        <FontAwesomeIcon className={styles.icon} icon={faUser} />
        <span className={styles.hide}>Log Out</span>
        </div>
      </li>
    </div>
  );
};

export default NavBar;
