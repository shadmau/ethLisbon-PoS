import React from 'react'
import styles from './Layout.module.scss'
import { Footer } from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export function Layout({ ...props }) {
    return (
        <div className={styles.view} {...props}>
            <main className={styles.container}>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}