import React, { ReactNode } from 'react'
import styles from './Layout.module.scss'
import { Footer } from './components/Footer/Footer'

interface LayoutProps {
    children: ReactNode
}

export function Layout({ children, ...props }: LayoutProps) {
    return (
        <div {...props}>
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </div>
    )
}