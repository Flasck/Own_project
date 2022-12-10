import React from "react"
import { classnames } from "../../utils/classnames"
import styles from "./Button.module.css"

export const Button = ({ className, children, onClick }) =>
	<button className={classnames(styles.root, className)} onClick={onClick}>{children}</button>

