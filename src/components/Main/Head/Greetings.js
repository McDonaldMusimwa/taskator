import React from 'react'
import styles from './Greetings.module.scss'

const Greetings = () => {
    let tasks = 8
    let name = 'McDonald'

  return (
    <div>
        <span className={styles.name}>Hellow, {name}!</span>
        <strong><span className={styles.span}>You have {tasks} tasks today </span></strong>

    </div>
  )
}

export default Greetings