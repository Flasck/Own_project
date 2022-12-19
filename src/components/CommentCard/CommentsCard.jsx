import React from "react"
import styles from "./CommentCard.module.css"
import {RatingStars} from "../RatingStars/RatingStars";
import {Placeholder} from "@components/Placeholder/Placeholder";

export const CommentsCard = ({data}) => {
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
                    <div className={styles.rate}><RatingStars count={data.rate} isWorking={false}/></div>
                </div>
            </div>
            <div className={styles.text}>{data.text}</div>
        </article>
    )
}

export const CommentsCardPlaceholder = () => {
    return (
        <article className={styles.root}>
            <div className={styles.title}>
                <div className={styles.title__item}>
                    <div className={styles.author}>
                        <span className={styles.dot}></span>
                        <span><Placeholder width={10} /></span>
                    </div>
                </div>
                <div className={styles.title__item}>
                    <div className={styles.rate}><RatingStars count={Math.floor(Math.random() * 2.5 + 2.5)} isWorking={false}/></div>
                </div>
            </div>
            <div className={styles.text}><Placeholder height={3} heightD={2} /></div>
        </article>
    )
}
