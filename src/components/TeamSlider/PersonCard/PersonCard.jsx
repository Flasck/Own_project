import React, { useState } from "react"
import styles from "./PersonCard.module.css"
import { classnames } from "../../../utils/classnames"
import { CircledText } from "../../CircledText/CircledText"
import Dark_gh from "./Dark_gh-logo.svg"
import Light_gh from "./Light_gh-logo.svg"
import TG_logo from "./TG-logo.svg"

export const PersonCard = ({ arr }) => {
	const [side, setSide] = useState(true)
	const change = () => setSide(!side)

	return (
		<div onClick={change} className={styles.wrapper}>
			<div className={classnames(styles.back, side ? styles.back_base : styles.back_rev)}>
				<div className={styles.person_wrapper}>
					<div className={styles.person}>
						<img className={styles.photo} src="{arr.photo}" alt="error" />
						<h1 className={styles.name}>{arr.name}</h1>
						<div className={styles.links}>
							<a className={styles.github} href="{arr.github}">
								<img src={Dark_gh} alt="GH" />
							</a>
							<a className={styles.tg} href="arr.tg">
								<img src={TG_logo} alt="TG" />
							</a>
						</div>
					</div>

					<div className={styles.techs}>
						{arr.techs.map((t) => (
							<CircledText>{t}</CircledText>
						))}
					</div>
				</div>
			</div>
			<div className={classnames(styles.front, side ? styles.front_base : styles.front_rev)}>
				<p>{arr.desc}</p>
			</div>
		</div>
	)
}
