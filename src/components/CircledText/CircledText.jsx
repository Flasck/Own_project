import React from "react"
import styles from "./CircledText.module.css"

export const CircledText = ({ children }) => {
	return (
		<div className={styles.stroke}>
			<span className={styles.text}>{children}</span>
		</div>
	)
}
