import React, { useState } from "react"
import styles from "./PersonCard.module.css"
import { classnames } from "../../../utils/classnames"
import { CircledText } from "../../CircledText/CircledText"
import Dark_gh from "./img/Dark_gh-logo.svg"
import Light_gh from "./img/Light_gh-logo.svg"
import TG_logo from "./img/TG-logo.svg"

export const PersonCard = ({ person }) => {
	const [side, setSide] = useState(true)
	const change = () => setSide(!side)

	return (
		<div onClick={change} className={styles.wrapper}>
			<div className={classnames(styles.back, side ? styles.back_base : styles.back_rev)}>
				<p>{person.id}</p>
				<p>{person.name}</p>
				<p>{person.technology}</p>
			</div>
			<div className={classnames(styles.front, side ? styles.front_base : styles.front_rev)}>
				<p>{person.description}</p>
			</div>
		</div>
	)
}
