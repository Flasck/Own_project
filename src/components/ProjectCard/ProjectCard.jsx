import React from "react"
import styles from "./ProjectCard.module.css"
import img from "./image.svg"
import { FramedText } from "../FramedText/FramedText"


export const ProjectCard = ({ data }) =>
	<article className={styles.root}>
		<figure>
			<img className={styles.img} src={img} alt="Не удалось загрузить фото" />
			<figcaption>
				<time className={styles.time}>{data.date}</time>
			</figcaption>
		</figure>
		<h2 className={styles.title}>{data.title}</h2>
		<div className={styles.subTitle}>
			<span className={styles.authors}>{data.authors.join(", ")}</span>
			<div className={styles.dot} />
			<span>{data.type}</span>
		</div>
		<p className={styles.description}>{data.description}</p>
		<div className={styles.gap}></div>
		<div className={styles.techs}>
			{data.technologies.map((t, i) => <FramedText key={i}>{t}</FramedText>)}
		</div>
	</article>
