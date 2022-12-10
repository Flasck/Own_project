import React, { useState } from "react"
import styles from "./PersonCard.module.css"
import { classnames } from "../../../utils/classnames"

export const PersonCard = ({ photo, name, post, techs, desc }) => {
	const [side, setSide] = useState(true)
	const change = () => {
		setSide(!side)
		console.log(side)
	}
	return (
		<div onClick={change} className={styles.wrapper}>
			<div className={classnames(styles.back, side ? styles.back_base : styles.back_rev)}>
				<div className={styles.photo}></div>
				<h1 className={styles.name}>{name}</h1>
				<p className={styles.post}>{post}</p>
				<p className={styles.techs}>{techs}</p>
			</div>

			<div className={classnames(styles.front, side ? styles.front_base : styles.front_rev)}>
				<p className={styles.desc}>{desc}</p>
			</div>
		</div>
	)
}
