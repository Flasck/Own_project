import React from "react";
import styles from "./Card.module.css";


export const Card = ({ title, text }) =>
    <div className={styles.root}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
    </div>
