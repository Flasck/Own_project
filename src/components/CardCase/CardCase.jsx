import React from "react"
import styles from "./CardCase.module.css"
import img from "./image.svg"
import { CircledText } from "../CircledText/CircledText"

export const CardCase = ({ arr }) => {
	return (
		<article className={styles.wrapper}>
			<figure>
				<img src={img} alt="Не удалось загрузить фото" className={styles.img} />
				<figcaption>
					<time className={styles.time}>{arr.time}</time>
				</figcaption>
			</figure>
			<h1 className={styles.name}>{arr.name}</h1>
			<div className={styles.liner}>
				<span className={styles.authors}>{arr.authors}</span>
				<div className={styles.cont}>
					<div className={styles.dot} />
					<span className={styles.for}>{arr.for}</span>
				</div>
			</div>
			{/* <span className={styles.authors}>{arr.authors}</span>
			<div className={styles.liner}>
				<div className={styles.dot} />
				<span className={styles.for}>{arr.for}</span>
			</div> */}
			<p className={styles.desc}>{arr.desc}</p>
			<div className={styles.techs}>
				{arr.techs.map((t) => (
					<CircledText>{t}</CircledText>
				))}
			</div>
		</article>
	)
}
