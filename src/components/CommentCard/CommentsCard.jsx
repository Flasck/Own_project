import React from "react"
import { Placeholder } from "@components/Placeholder/Placeholder";
import styles from "./CommentCard.module.css"
import { RatingStars } from "../RatingStars/RatingStars";


export const CommentsCard = ({ data }) =>
	<article className={styles.root}>
		<div className={styles.author}>
			<span className={styles.dot} />
			<span>{data.author}</span>
		</div>
		<div className={styles.rate}>
			<RatingStars count={data.rate} isWorking={false} />
		</div>
		<div className={styles.text}>{data.text}</div>
	</article>


export const CommentsCardPlaceholder = () =>
	<article className={styles.root}>
		<div className={styles.author}>
			<span className={styles.dot} />
			<span><Placeholder width={10} /></span>
		</div>
		<div className={styles.rate}>
			<RatingStars count={Math.floor(Math.random() * 2.5 + 2.5)} isWorking={false} />
		</div>
		<div className={styles.text}><Placeholder height={3} heightD={2} /></div>
	</article>
