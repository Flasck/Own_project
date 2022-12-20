import React from "react"
import { Button } from "@components/Button/Button"
import styles from "./ContactButton.module.css"


export const ContactButton = ({ children, onClick }) =>
	<Button onClick={onClick} className={styles.root}>{children}</Button>
