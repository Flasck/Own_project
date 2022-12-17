import React from "react"
import styles from "./CommentCard.module.css"

export const CommentsCard = ({ data }) => {
	return (
		<article className={styles.root}>
			<div className={styles.title}>
				<div className={styles.title__item}>
					<div className={styles.author}>
						<span className={styles.dot}></span>
						<span>{data.author}</span>
					</div>
				</div>
				<div className={styles.title__item}>
					<div className={styles.rate}>{new Array(data.rate).fill("⭐").join("")}</div>
				</div>
			</div>
			<div className={styles.text}>{data.text}</div>
		</article>
	)
}
