import React, { useContext } from 'react'
import styles from './Home.module.scss'
import { Typography } from '@mui/material'
import { WalletContext } from '../context/Wallet'

export function HomePage({ ...props }) {

    const { accounts, logout } = useContext(WalletContext)

    console.log('accounts ', accounts)

    return (
        <div className={styles.container} {...props}>
            <Typography variant='h3' component='h1'>User.name</Typography>
            <div className="flex-container">
                <div>
                    <button onClick={logout} className="card">
                        Log Out
                    </button>
                </div>
            </div>

            <div id="console" style={{ whiteSpace: "pre-line" }}>
                <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
            </div>
        </div>
    )
}