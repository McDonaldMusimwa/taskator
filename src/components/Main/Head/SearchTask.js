import React from 'react'
import styles from'./SearchTask.module.scss'

const SearchTask = () => {
  return (
    <div className={styles.searchBar}>
        <input className={styles.searchinput} type='search' placeholder='   🔍   Search Something' />
    </div>
  )
}

export default SearchTask