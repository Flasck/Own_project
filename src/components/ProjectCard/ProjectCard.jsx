import React from "react"
import styles from "./ProjectCard.module.css"
import img from "./image.svg"
import { FramedText } from "../FramedText/FramedText"
import { Placeholder } from "@components/Placeholder/Placeholder";

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

export const ProjectCardPlaceholder = () =>
{
	return <article className={styles.root}>
		<figure className={styles.figure}>
			<Placeholder className={styles.img} disableText/>
			<figcaption>
				<time className={styles.time}><Placeholder width={10} disableText /></time>
			</figcaption>
		</figure>
		<h2 className={styles.title}><Placeholder width={10} widthD={3} disableText /></h2>
		<div className={styles.subTitle}>
			<span className={styles.authors}><Placeholder width={10} widthD={3} disableText /></span>
			<Placeholder className={styles.placeholderDot} width={1} disableText />
			<span><Placeholder width={12} widthD={3} disableText /></span>
		</div>
		<p className={styles.description}><Placeholder height={8} heightD={3} disableText /></p>
		<div className={styles.gap}></div>
		<div className={styles.techs}>
			<Placeholder width={6} widthD={3} disableText />
			<Placeholder width={6} widthD={3} disableText />
			<Placeholder width={6} widthD={3} disableText />
		</div>
	</article>
}
