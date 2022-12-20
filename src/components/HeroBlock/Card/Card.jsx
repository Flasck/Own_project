import React from "react";
import styles from "./Card.module.css";


export const Card = ({ title, text }) =>
	<div className={styles.root}>
		<div className={styles.title}>
			<h3 className={styles.title__number}>{title}</h3>
			<hr className={styles.title__line} />
		</div>
		<p className={styles.text}>{text}</p>
	</div>
