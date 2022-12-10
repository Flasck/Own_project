import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'

export const Layout = ({ children }) =>
    <div className={styles.root}>
        <Header className={styles.header} />
        <div className={styles.container}>
            <div className={styles.content}>{children}</div>
        </div>
        <Footer />
    </div>
