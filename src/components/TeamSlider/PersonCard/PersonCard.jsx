import React, { useState } from "react"
import { classNames } from "@utils/classNames"
import { FramedText } from "@components/FramedText/FramedText"
import styles from "./PersonCard.module.css"
import { IconGh } from "./LogoComponents/IconGh"
import { IconTg } from "./LogoComponents/IconTg"

export const PersonCard = ({ refLink, person }) =>
{
	const [side, setSide] = useState(true)
	const change = () => setSide(v => !v)

	return (
		<article onClick={change} className={styles.card} ref={refLink}>
			<div className={classNames(styles.back, side ? styles.back_side_base : styles.back_side_rev)}>
				<div className={styles.mainInfo}>
					{/* eslint-disable-next-line no-undef */}
					<img className={styles.photo} src={`${SERVERURL}/image?id=${person.imageId}`} alt="No img" />
					<h3 className={styles.name}>{person.name}</h3>
					<div className={styles.links}>
						<a className={styles.link} href={person.github} target="_blank" onClick={() => change()} rel="noreferrer">
							<IconGh className={styles.link__logo} />
						</a>
						<a className={styles.link} href={person.telegram} target="_blank" onClick={() => change()} rel="noreferrer">
							<IconTg className={styles.link__logo} />
						</a>
					</div>
				</div>
				<p className={styles.post}>{person.descriptionShort}</p>
				<div className={styles.techs}>
					{person.technology.map(t => (
						<FramedText key={Math.random()}>{t}</FramedText>
					))}
				</div>
			</div>
			<div className={classNames(styles.front, side ? styles.front_side_base : styles.front_side_rev)}>
				<p className={styles.desc}>{person.description}</p>
			</div>
		</article>
	)
}
