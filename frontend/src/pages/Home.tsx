import React, { useContext } from 'react'
import styles from './Home.module.scss'
import { Typography } from '@mui/material'
import { useWeb3Auth } from '../hooks/useWeb3Auth'
import { WalletContext } from '../context/Wallet'

interface HomePageProps {
    handleLogout?: () => Promise<void>
}

export function HomePage({ handleLogout, ...props }: HomePageProps) {

    const { accounts } = useContext(WalletContext)

    console.log('accounts ', accounts)

    return (
        <div className={styles.container}>
            <Typography variant='h3' component='h1'>User.name</Typography>
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
        </div>
    )
}