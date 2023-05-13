import React from 'react'
import styles from './Home.module.scss'
import { Typography } from '@mui/material'

interface HomePageProps {
    handleLogout: () => Promise<void>
}

export function HomePage({ handleLogout }: HomePageProps) {
    const loggedInView = (
        <>
            <div className="flex-container">
                <div>
                    <button onClick={handleLogout} className="card">
                        Log Out
                    </button>
                </div>
            </div>

            <div id="console" style={{ whiteSpace: "pre-line" }}>
                <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
            </div>
        </>
    );

    return (
        <div className={styles.container}>
            <Typography variant='h3' component='h1'>User.name</Typography>
            {loggedInView}
        </div>
    )
}