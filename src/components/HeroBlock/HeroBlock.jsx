import React from "react"
import { useSelector } from "react-redux"
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { Card } from "./Card/Card"
import styles from "./HeroBlock.module.css"
import { Arrow } from "./Arrow"
import { HeroBlockPlaceholder } from "./HeroBlockPlaceholder"

export const HeroBlock = () =>
{
	const texts = useSelector(selectConstants)

	return <>
		{" "}
		{
			texts
				? <section className={styles.root}>
					<div className={styles.leftBlock}>
						<h2 className={styles.title}>{texts?.mainPage?.heroBlock?.title}</h2>
						<p className={styles.subTitle}>{texts?.mainPage?.heroBlock?.subtitle}</p>
					</div>
					<div className={styles.rightBlock}>
						<Card title="01" text={texts?.mainPage?.heroBlock?.card1} />
						<Arrow />
						<Card title="02" text={texts?.mainPage?.heroBlock?.card2} />
						<Arrow />
						<Card title="03" text={texts?.mainPage?.heroBlock?.card3} />
					</div>
				</section>
				:			<HeroBlockPlaceholder />
		}
	</>
}
