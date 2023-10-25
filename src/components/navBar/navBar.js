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
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  //console.log(props.navData);
  const navData = ["Dashboad", "Analytics", "Team", "Documents", "Settings"];
  return (
    <nav className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="logo" />

      <NavLink to='/' className={styles.navbaritem}>
        <FontAwesomeIcon className={styles.icon} icon={faDashboard} />
        <span className={styles.hide}>{navData[0]}</span>
      </NavLink>

      <NavLink to="analytics" className={styles.navbaritem}>
        <FontAwesomeIcon className={styles.icon} icon={faChartPie} />
        <span className={styles.hide}> {navData[1]}</span>
      </NavLink>

      <NavLink to="team" className={styles.navbaritem}>
        <FontAwesomeIcon className={styles.icon} icon={faUserGroup} />
        <span className={styles.hide}>{navData[2]}</span>
      </NavLink>

      <NavLink to="documents" className={styles.navbaritem}>
        <FontAwesomeIcon className={styles.icon} icon={faFile} />
        <span className={styles.hide}>{navData[3]}</span>
      </NavLink>

      <NavLink to="settings" className={styles.navbaritem}>
        <FontAwesomeIcon className={styles.icon} icon={faGear} />
        <span className={styles.hide}>{navData[4]}</span>
      </NavLink>

      <li onClick={props.onLogout} className={styles.Logout}>
        <div className={styles.navbaritem}>
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <span className={styles.hide}>Log Out</span>
        </div>
      </li>
    </nav>
  );
};

export default NavBar;
