import React, { useState } from "react"
import styles from "./PersonCard.module.css"
import { classnames } from "@utils/classnames"
import { FramedText } from "@components/FramedText/FramedText"

export const PersonCard = ({ refLink, person }) => {
	const [side, setSide] = useState(true)
	const change = () => setSide((v) => !v)

	return (
		<div onClick={change} className={styles.card} ref={refLink}>
			<div className={classnames(styles.back, side ? styles.back_base : styles.back_rev)}>
				<div className={styles.main_info}>
					<img className={styles.photo} src={`http://localhost:3001/image?id=${person.imageId}`} alt="No img" />
					<h1 className={styles.name}>{person.name}</h1>
					<div className={styles.links}>
						<a className={styles.link} href={person.github} target="_blank" onClick={() => change()}>
							<Icon_Gh />
						</a>
						<a className={styles.link} href={person.telegram} target="_blank" onClick={() => change()}>
							<Icon_Tg />
						</a>
					</div>
				</div>
				<p className={styles.post}>{person.descriptionShort}</p>
				<div className={styles.techs}>
					{person.technology.map((t) => (
						<FramedText key={Math.random()}>{t}</FramedText>
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
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.link_logo} xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10 0.24231C8.68678 0.24231 7.38642 0.500967 6.17317 1.00351C4.95991 1.50606 3.85752 2.24266 2.92893 3.17124C1.05357 5.04661 0 7.59014 0 10.2423C0 14.6623 2.87 18.4123 6.84 19.7423C7.34 19.8223 7.5 19.5123 7.5 19.2423V17.5523C4.73 18.1523 4.14 16.2123 4.14 16.2123C3.68 15.0523 3.03 14.7423 3.03 14.7423C2.12 14.1223 3.1 14.1423 3.1 14.1423C4.1 14.2123 4.63 15.1723 4.63 15.1723C5.5 16.6923 6.97 16.2423 7.54 16.0023C7.63 15.3523 7.89 14.9123 8.17 14.6623C5.95 14.4123 3.62 13.5523 3.62 9.74231C3.62 8.63231 4 7.74231 4.65 7.03231C4.55 6.78231 4.2 5.74231 4.75 4.39231C4.75 4.39231 5.59 4.12231 7.5 5.41231C8.29 5.19231 9.15 5.08231 10 5.08231C10.85 5.08231 11.71 5.19231 12.5 5.41231C14.41 4.12231 15.25 4.39231 15.25 4.39231C15.8 5.74231 15.45 6.78231 15.35 7.03231C16 7.74231 16.38 8.63231 16.38 9.74231C16.38 13.5623 14.04 14.4023 11.81 14.6523C12.17 14.9623 12.5 15.5723 12.5 16.5023V19.2423C12.5 19.5123 12.66 19.8323 13.17 19.7423C17.14 18.4023 20 14.6623 20 10.2423C20 8.92909 19.7413 7.62873 19.2388 6.41547C18.7362 5.20222 17.9997 4.09983 17.0711 3.17124C16.1425 2.24266 15.0401 1.50606 13.8268 1.00351C12.6136 0.500967 11.3132 0.24231 10 0.24231Z"
			fill="var(--c-text)"
		/>
	</svg>
)

const Icon_Tg = () => (
	<svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={styles.link_logo} xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8C14.49 8.38 13.84 12.22 13.51 13.99C13.37 14.74 13.09 14.99 12.83 15.02C12.25 15.07 11.81 14.64 11.25 14.27C10.37 13.69 9.87 13.33 9.02 12.77C8.03 12.12 8.67 11.76 9.24 11.18C9.39 11.03 11.95 8.7 12 8.49C12.0069 8.45819 12.006 8.42517 11.9973 8.3938C11.9886 8.36244 11.9724 8.33367 11.95 8.31C11.89 8.26 11.81 8.28 11.74 8.29C11.65 8.31 10.25 9.24 7.52 11.08C7.12 11.35 6.76 11.49 6.44 11.48C6.08 11.47 5.4 11.28 4.89 11.11C4.26 10.91 3.77 10.8 3.81 10.45C3.83 10.27 4.08 10.09 4.55 9.9C7.47 8.63 9.41 7.79 10.38 7.39C13.16 6.23 13.73 6.03 14.11 6.03C14.19 6.03 14.38 6.05 14.5 6.15C14.6 6.23 14.63 6.34 14.64 6.42C14.63 6.48 14.65 6.66 14.64 6.8Z"
			fill="#33A8E4"
		/>
	</svg>
)
