import React from "react"
import styles from "./ProjectCard.module.css"
import img from "./image.svg"
import { FramedText } from "../FramedText/FramedText"

export const ProjectCard = ({ project }) =>
{
	return <article className={styles.root}>
		<figure className={styles.figure}>
			<img className={styles.img}
				src={project.imageId !== null ? `http://localhost:3001/image?id=${project.imageId}` : img}
				alt="Не удалось загрузить фото" />
			<figcaption>
				<time className={styles.time}>{project.date}</time>
			</figcaption>
		</figure>
		<h2 className={styles.title}>{project.title}</h2>
		<div className={styles.subTitle}>
			<span className={styles.authors}>{project.authors.join(", ")}</span>
			<div className={styles.dot} />
			<span>{project.type}</span>
		</div>
		<p className={styles.description}>{project.description}</p>
		<div className={styles.gap}></div>
		<div className={styles.techs}>
			{project.technologies.map((t, i) => <FramedText key={i}>{t}</FramedText>)}
		</div>
	</article>
}