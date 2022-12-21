import React from "react"
import { Placeholder } from "@components/Placeholder/Placeholder"
import styles from "./ProjectCard.module.css"
import img from "./image.svg"
import { FramedText } from "../FramedText/FramedText"

export const ProjectCard = ({ project }) => (
	<article className={styles.root}>
		<figure className={styles.figure}>
			<a href={project.link} target="_blank">
				<img
					className={styles.img}
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
)

export const ProjectCardPlaceholder = () => (
	<article className={styles.root}>
		<figure className={styles.figure}>
			<Placeholder className={styles.imgPlaceholder} disableText />
			<figcaption>
				<time className={styles.time}>
					<Placeholder width={10} disableText />
				</time>
			</figcaption>
		</figure>
		<h2 className={styles.title}>
			<Placeholder width={10} widthD={3} disableText />
		</h2>
		<div className={styles.subTitle}>
			<span className={styles.authors}>
				<Placeholder width={10} widthD={3} disableText />
			</span>
			<Placeholder className={styles.placeholderDot} width={1} disableText />
			<span>
				<Placeholder width={12} widthD={3} disableText />
			</span>
		</div>
		<p className={styles.description}>
			<Placeholder height={8} heightD={3} disableText />
		</p>
		<div className={styles.gap} />
		<div className={styles.techs}>
			<Placeholder width={6} widthD={3} disableText />
			<Placeholder width={6} widthD={3} disableText />
			<Placeholder width={6} widthD={3} disableText />
		</div>
	</article>
)
