import React, { useState } from 'react'
import styles from './heading.module.css'

function Heading() {

    const [name, setName] = useState("")

    const handleClick = () => {
        console.log(name);
    }

    return (
        <div className={styles.container}>
            <h5>Search :</h5>
            <input type="text" placeholder="type here" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default Heading
