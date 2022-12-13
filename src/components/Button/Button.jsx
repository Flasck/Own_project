import React from "react"
import { classnames } from "@utils/classnames"
import styles from "./Button.module.css"


export const Button = ({ className, children, onClick, disabled }) =>
	<button
		className={classnames(styles.root, className)}
		disabled={disabled}
		onClick={onClick}
	>
		{children}
	</button>
