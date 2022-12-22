import React from "react"
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
