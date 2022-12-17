import React, { useState } from "react"
import styles from "./PersonCard.module.css"
import { classnames } from "@utils/classnames"
import { FramedText } from "@components/FramedText/FramedText"
import Dark_gh from "./img/Dark_gh-logo.svg"
import Light_gh from "./img/Light_gh-logo.svg"
import TG_logo from "./img/TG-logo.svg"

export const PersonCard = ({ refLink, gap, person }) => {
	const [side, setSide] = useState(true)
	const change = () => setSide((v) => !v)
	const theme = localStorage.getItem("darkTheme")

	return (
		<div onClick={change} className={styles.card} ref={refLink} style={{ margin: `0 ${gap}px` }}>
			<div className={classnames(styles.back, side ? styles.back_base : styles.back_rev)}>
				<div className={styles.main_info}>
					<img className={styles.photo} src={Light_gh} alt="No img" />
					<h1 className={styles.name}>{person.name}</h1>
					<div className={styles.links}>
						<a
							className={styles.link}
							href="https://github.com/"
							target="_blank"
							onClick={() => {
								change()
							}}
						>
							<Icon_Gh />
						</a>
						<a
							className={styles.link}
							href="https://web.telegram.org/"
							target="_blank"
							onClick={() => {
								change()
							}}
						>
							<img className={styles.link_logo} src={TG_logo} alt="" />
						</a>
					</div>
				</div>
				<p className={styles.post}>{person.descriptionShort}</p>
				<div className={styles.techs}>
					{person.technology.map((t) => (
						<FramedText>{t}</FramedText>
					))}
				</div>
			</div>
			<div className={classnames(styles.front, side ? styles.front_base : styles.front_rev)}>
				<p className={styles.desc}>{person.description}</p>
			</div>
		</div>
	)
}

const Icon_Gh = () => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		className={styles.link_logo}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M10 0.24231C8.68678 0.24231 7.38642 0.500967 6.17317 1.00351C4.95991 1.50606 3.85752 2.24266 2.92893 3.17124C1.05357 5.04661 0 7.59014 0 10.2423C0 14.6623 2.87 18.4123 6.84 19.7423C7.34 19.8223 7.5 19.5123 7.5 19.2423V17.5523C4.73 18.1523 4.14 16.2123 4.14 16.2123C3.68 15.0523 3.03 14.7423 3.03 14.7423C2.12 14.1223 3.1 14.1423 3.1 14.1423C4.1 14.2123 4.63 15.1723 4.63 15.1723C5.5 16.6923 6.97 16.2423 7.54 16.0023C7.63 15.3523 7.89 14.9123 8.17 14.6623C5.95 14.4123 3.62 13.5523 3.62 9.74231C3.62 8.63231 4 7.74231 4.65 7.03231C4.55 6.78231 4.2 5.74231 4.75 4.39231C4.75 4.39231 5.59 4.12231 7.5 5.41231C8.29 5.19231 9.15 5.08231 10 5.08231C10.85 5.08231 11.71 5.19231 12.5 5.41231C14.41 4.12231 15.25 4.39231 15.25 4.39231C15.8 5.74231 15.45 6.78231 15.35 7.03231C16 7.74231 16.38 8.63231 16.38 9.74231C16.38 13.5623 14.04 14.4023 11.81 14.6523C12.17 14.9623 12.5 15.5723 12.5 16.5023V19.2423C12.5 19.5123 12.66 19.8323 13.17 19.7423C17.14 18.4023 20 14.6623 20 10.2423C20 8.92909 19.7413 7.62873 19.2388 6.41547C18.7362 5.20222 17.9997 4.09983 17.0711 3.17124C16.1425 2.24266 15.0401 1.50606 13.8268 1.00351C12.6136 0.500967 11.3132 0.24231 10 0.24231Z"
			fill="var(--c-text)"
		/>
	</svg>
)
