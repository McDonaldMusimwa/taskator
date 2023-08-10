import React from 'react'
import styles from './Recently.module.scss'
import TaskItem from './TaskItem'
const Upcoming = (props) => {



  return (
    <div className={styles.Tasks}>   

{props.tasks.map((tas)=>
    <TaskItem key={tas._id}
    title={tas.title}
    description={tas.description}
    status={tas.progress}/>
    )}
</div>
  )
}

export default Upcoming