import React from "react";
import styles from "./Spinner.module.css";

export const Spinner = () =>
    <div className={styles.turtle}>
        <div className={styles.head}></div>
        <div className={styles.tail}></div>
        <div className={styles.foot + ' ' + styles.front}></div>
        <div className={styles.foot + ' ' + styles.back}></div>
    </div>