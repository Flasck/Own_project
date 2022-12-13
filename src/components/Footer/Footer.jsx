import React from "react"
import styles from "./Footer.module.css"


export const Footer = () =>
    <footer className={styles.root}>
        <div className={styles.container}>
            <div>Проект в рамках интенсива Академии Яндекса</div>
            <div>Начало работы над проектом: 7/12/2022</div>
        </div>
    </footer>
