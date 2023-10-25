import React from 'react';
import ProfileImage from './ProfileImage/ProfileImage';
import ProfileName from './ProfileName/ProfileName';
//import profileImage from '../../logo.png';
import styles from './Settings.module.scss';

const Settings = () => {
   
  return (
    
    <div className={styles.Settings}>
        <ProfileImage />
        <ProfileName />
     
    </div>
  )
}

export default Settings