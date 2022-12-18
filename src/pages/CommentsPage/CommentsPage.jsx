import React, {useEffect} from "react"
import styles from "./CommentsPage.module.css"
import {CommentsCard} from "@components/CommentCard/CommentsCard.jsx"
import {useDispatch, useSelector} from "react-redux"
import {selectComments} from "@store/CommentsSlice/selectors"
import {Statuses} from "@utils/Statuses"
import {Spinner} from "@components/Spinner/Spinner"
import {LoadCommentsIfNotExist} from "@store/CommentsSlice/loadCommentsIfNotExist";
import {selectCommentsStatusGet} from "@store/CommentsSlice/selectors";
import {CommentForm} from "@components/CommentForm/CommentForm";
import {selectCommentsStatusSend} from "@store/CommentsSlice/selectors";
import {WidgetComment} from "@components/WidgetComment/WidgetComment";

export const CommentsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(LoadCommentsIfNotExist), [])
    const comments = useSelector(selectComments)
    const statusGet = useSelector(selectCommentsStatusGet)
    const statusSend = useSelector(selectCommentsStatusSend)

    if (statusGet === Statuses.inProgress) {
        return (
            <div className={styles.wrapper_spinner}>
                <Spinner/>
            </div>
        )
    }

    return (
        <div className={styles.root}>
            <CommentForm/>
            {comments?.map((el) => (
                <CommentsCard key={el.id} data={el}/>
            ))}
            {
                statusSend !== Statuses.idle ? <WidgetComment/> : ''
            }
        </div>
    )
}
