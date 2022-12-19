import React, { useState } from "react"
import styles from "./PersonCard.module.css"
import { classnames } from "@utils/classnames"
import { FramedText } from "@components/FramedText/FramedText"
import { Icon_Gh } from "./LogoComponents/Icon_Gh"
import { Icon_Tg } from "./LogoComponents/Icon_Tg"

export const PersonCard = ({ refLink, person }) => {
	const [side, setSide] = useState(true)
	const change = () => setSide((v) => !v)

	return (
		<div onClick={change} className={styles.card} ref={refLink}>
			<div className={classnames(styles.back, side ? styles.back_base : styles.back_rev)}>
				<div className={styles.main_info}>
					<img className={styles.photo} src={`http://localhost:3001/image?id=${person.imageId}`} alt="No img" />
					<h3 className={styles.name}>{person.name}</h3>
					<div className={styles.links}>
						<a className={styles.link} href={person.github} target="_blank" onClick={() => change()}>
							<Icon_Gh cn={styles.link_logo} />
						</a>
						<a className={styles.link} href={person.telegram} target="_blank" onClick={() => change()}>
							<Icon_Tg cn={styles.link_logo} />
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
