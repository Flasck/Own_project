import React from "react"
import styles from "./FramedText.module.css"


export const FramedText = ({ children }) => (
	<div className={styles.root}>
		<span>{children}</span>
	</div>
)

