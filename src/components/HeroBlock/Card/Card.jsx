import React from "react";
import styles from "./Card.module.css";

export const Card = ({title, text}) => {
    return (
    <div className={styles.card}>
        <span className={styles.card__number}>{title}</span>
        <p className={styles.card__text}>{text}</p>
    </div>
    )
}