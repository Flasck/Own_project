import React from "react";
import styles from "./Spinner.module.css";

export const Spinner = () =>
	<div className={styles.turtle}>
		<div className={styles.head} />
		<div className={styles.tail} />
		<div className={`${styles.foot} ${styles.front}`} />
		<div className={`${styles.foot} ${styles.back}`} />
	</div>
