import React from "react"
import styles from "./ProjectCard.module.css"
import img from "./image.svg"
import { FramedText } from "../FramedText/FramedText"

export const ProjectCard = ({ project }) =>
	<article className={styles.root}>
		<figure className={styles.figure}>
			<a href={project.link} target="_blank" rel="noreferrer">
				<img
					className={styles.img}
					/* eslint-disable-next-line no-undef */
					src={project.imageId !== null ? `${SERVERURL}/image?id=${project.imageId}` : img}
					alt={project.title}
				/>
			</a>
			<figcaption>
				<time className={styles.time}>{project.date}</time>
			</figcaption>
		</figure>
		<h3 className={styles.title}>{project.title}</h3>
		<div className={styles.subTitle}>
			<span className={styles.authors}>{project.authors.join(", ")}</span>
			<div className={styles.dot} />
			<span>{project.type}</span>
		</div>
		<p className={styles.description}>{project.description}</p>
		<div className={styles.gap} />
		<div className={styles.techs}>
			{project.technologies.map((t, i) => (
				<FramedText key={i}>{t}</FramedText>
			))}
		</div>
	</article>
