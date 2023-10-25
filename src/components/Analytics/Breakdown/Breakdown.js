import React from 'react'
import styles from './Breakdown.module.scss';
import Card from '../CardStyles/Card'
const Breakdown = (props) => {
  return (
    <Card>
        <div className={styles.Breakdown}>
            <h2>Tasks Breakdown</h2>
            <label>Completed Tasks<hr className="card-divider"></hr><p>5</p></label>
            <label>Tasks in progress<hr className="card-divider"></hr><p>6</p></label>
            <label>Not done<hr className="card-divider"></hr><p>2</p></label>
        </div>
    </Card>
  )
}

export default Breakdown