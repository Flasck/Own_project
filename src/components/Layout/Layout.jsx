import React, {useState} from 'react'
import styles from './Layout.module.css'
import {Header} from "@components/Header/Header";
import {Footer} from "@components/Footer/Footer";
import {ModalWindowContact} from "@components/ModalWindowContact/ModalWindowContact";

export const Layout = ({children}) => {
    return (
        <div className={styles.root}>
            <ModalWindowContact/>
            <Header className={styles.header}/>
            <div className={styles.container}>
                <div className={styles.content}>{children}</div>
            </div>
            <Footer/>
        </div>
    )
}