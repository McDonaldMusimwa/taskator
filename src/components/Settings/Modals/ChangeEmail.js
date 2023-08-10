import React from 'react';
import Card from '../../Analytics/CardStyles/Card';
import  './ChangeEmail.scss';
const ChangeEmail = (props) => {
  return (
    <div>
    <div onClick={props.onClose} className='back-drop'/>
    <Card className='modal-'>
      <form method="POST">
        <h3>Change Profile Email</h3>
        <label className='header-'>Profile Email</label>
        <input type="text"name='profname' className='content-' />
        <footer>
          <button className='actions-' onClick={props.onConfirm}>Save </button>
        </footer>
      </form>
    </Card>
  </div>
  )
}

export default ChangeEmail