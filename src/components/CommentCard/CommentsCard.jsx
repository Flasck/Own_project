import React from "react";
import styles from "./CommentCard.module.css";
import {classnames} from "@utils/classnames";

export const CommentsCard = ({data}) => {
    return <template className={classnames(styles.row, styles.wrapper)}>
        <div className={styles.row}>
            <div className={styles.row__title}>
                <div className={styles.title__item}>
                    <div>Author:</div>
                    <div className={styles.author}>{data.author}</div>
                </div>
                <div className={styles.title__item}>
                    <div>Email:</div>
                    <div className={styles.email}>{data.email}</div>
                </div>
            </div>
            <div className={styles.text}>{data.text}</div>
            <div className={styles.id}>{data.id}</div>
        </div>
    </template>
}