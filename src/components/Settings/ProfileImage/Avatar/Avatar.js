import React from "react";
import "./Avatar.scss";
import noImage from  '../../../../No_Image.jpg';
const Avatar = ({src,alt}) => {
  return <div>
    {src? <img className="avatar" src={src} alt={alt} />:<img className="avatar" src={noImage} alt="noimage"/>}

  </div>;
};

export default Avatar;
