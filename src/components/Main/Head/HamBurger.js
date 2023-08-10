import React from 'react'
import {  faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './HamBurger.scss'
import Notifications from './Notifications';

const HamBurger = () => {
    const [hamBurgerOpen, sethamBurgerOpen] = useState(false);

    function toggleMenu() {
      sethamBurgerOpen(!hamBurgerOpen);
    }
  return (
    <div className="navigation">
          <div
            className={`hamburger ${hamBurgerOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
             <FontAwesomeIcon icon={hamBurgerOpen ? faXmark : faBars} />
           
          </div>
          {hamBurgerOpen && (
            <Notifications/>
          )}
        </div>
  )
}

export default HamBurger