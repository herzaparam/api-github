import React, { useState } from 'react'
import styles from './heading.module.css'
import axios from 'axios'
import Results from '../Results/Results'

function Heading() {

    const [name, setName] = useState("")
    const [repos, setRepos] = useState([])
    const [err, setErr] = useState(false)


    const handleClick = async () => {
        try {
            const result = await axios(`https://api.github.com/users/${name}/repos`)
            setRepos(result.data)
            setErr(false)
        } catch (err) {
            console.log(err);
            setErr(true)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h5>Search :</h5>
                <input type="text" placeholder="type here" onChange={(e) => setName(e.target.value)} />
                <button onClick={handleClick}>Search</button>
            </div>
            <div className={styles.mainContainer}>
                {err === true ? <h2 className={styles["text-error"]}>User Not Found</h2> :
                    <Results repos={repos} />
                }
            </div>
        </>
    )
}

export default Heading
