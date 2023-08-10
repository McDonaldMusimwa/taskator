import React from 'react';
import MainLeft from './BigScreen/MainLeft';
import MainRight from './BigScreen/MainRight';
import styles from './BigScreenMain.module.scss';

const BigScreenMain = () => {
  return (
    <div className={styles.Main}>
    <div className={styles.Left}><MainLeft/></div>
    <div className={styles.Right}><MainRight/></div>
        
    </div>
  )
}

export default BigScreenMain