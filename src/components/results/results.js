import React from 'react'
import Card from '../Cards/Card'
import styles from './results.module.css'

function Results({ repos }) {
    console.log(repos)
    return (
        <div className={styles.mainSect}>
            <h3>Repositories Results {repos.length !== 0 && <> for {repos[0].owner.login}</>}</h3>
            <div className={styles.secSect}>
                {repos.map((item) => {
                    return <Card
                        key={item.id}
                        name={item.name}
                        language={item.language}
                        url={item.html_url}
                    />
                })}
            </div>

        </div>
    )
}

export default Results
