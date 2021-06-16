import React from 'react'
import styles from './Card.module.css'

function Card({ name, language, url }) {


    return (
        <div className={styles.containerCard} >
            <a href={url}>{name}</a>
            <div className={styles["sect-top"]}>
                <h5>{language}</h5>
            </div>
        </div>
    )
}

export default Card
