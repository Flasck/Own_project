import styles from "@components/CommentCard/CommentCard.module.css";
import {Placeholder} from "@components/Placeholder/Placeholder";
import {RatingStars} from "@components/RatingStars/RatingStars";
import React from "react";

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
