import React from 'react'
import styles from './heading.module.css'

function Heading() {
    return (
        <div className={styles.container}>
            <h5>Search :</h5>
            <input type="text" placeholder="type here" />
        </div>
    )
}

export default Heading
