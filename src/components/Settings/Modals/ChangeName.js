import React from 'react';
import Card from '../../Analytics/CardStyles/Card';
import  './ChangeName.css';
const ChangeName = (props) => {
  return (
    <div>
    <div onClick={props.onClose} className='back-drop'/>
    <Card className='modal-'>
      <form method="POST">
        <h3>Change Profile Name</h3>
        <label className='header-'>ProfileName</label>
        <input type="text"name='profname' className='content-' />
        <footer>
          <button className='actions-' onClick={props.onConfirm}>Save </button>
        </footer>
      </form>
    </Card>
  </div>
  )
}

export default ChangeName