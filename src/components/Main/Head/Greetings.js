import React from 'react'
import './Greetings.scss'

const Greetings = () => {
    let tasks = 8
    let name = 'McDonald'

  return (
    <div>
        <span className='name'>Hellow, {name}!</span>
        <strong><span>You have {tasks} tasks today </span></strong>

    </div>
  )
}

export default Greetings