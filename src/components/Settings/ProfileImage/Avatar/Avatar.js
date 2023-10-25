import React from "react";
import styles from "./Avatar.module.scss";
import noImage from "../../../../No_Image.jpg";
const Avatar = ({ src, alt }) => {
  return (
    <div className={styles.div}>
      {src ? (
        <img className={styles.avatar} src={src} alt={alt} />
      ) : (
        <img className={styles.avatar} src={noImage} alt="noimage" />
      )}
    </div>
  );
};

export default Avatar;
