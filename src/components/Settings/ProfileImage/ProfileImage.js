import React,{useState} from 'react';
import Avatar from './Avatar/Avatar';
import UpLoadModal from '../Modals/UpLoadModal'

const ProfileImage = () => {
    const [changePicture,setChangePicture]=useState(false);
    const changePictureHandler = ()=>{
      setChangePicture(true)
      
    }
    const closePictureHandler = ()=>{
      setChangePicture(false)
      console.log('close')
    }
  return (
    <div>

<span onClick={changePictureHandler}><Avatar src="" alt='profilepicture'/></span>
        {changePicture? <UpLoadModal onConfirm={changePictureHandler} onClose={closePictureHandler}/> : null  }

    </div>
  )
}

export default ProfileImage