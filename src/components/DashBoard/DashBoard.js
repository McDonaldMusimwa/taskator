import React, { useState, useEffect } from "react";
import Main from "../Main/Main";
import BigScreenMain from "../Main/BigScreenMain";
import styles from "./DashBoard.module.scss";

function Dashboad() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div className={styles.DashboardContainer}>
      <div className={styles.MainPanel}>
        {isMobile ? <Main /> : <BigScreenMain />}
      </div>
    </div>
  );
}

export default Dashboad;
