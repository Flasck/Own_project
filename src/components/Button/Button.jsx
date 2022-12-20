import React from "react"
import { classNames } from "@utils/classNames"
import styles from "./Button.module.css"


export const Button = ({ className, children, onClick, disabled }) =>
	<button
		className={classNames(styles.root, className)}
		disabled={disabled}
		onClick={onClick}
	>
		{children}
	</button>
