import React from "react";
import styles from "./Card.module.css";

export const Card = ({title, text}) => {
    return (
    <div className={styles.card}>
        <span className={styles.card_number}>{title}</span>
        <p className={styles.card_text}>{text}</p>
    </div>
    )
}