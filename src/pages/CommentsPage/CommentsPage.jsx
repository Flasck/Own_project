import React, {useEffect} from "react"
import styles from "./CommentsPage.module.css"
import {CommentsCard} from "@components/CommentCard/CommentsCard.jsx"
import {useDispatch, useSelector} from "react-redux"
import {selectComments} from "@store/CommentsSlice/selectors"
import {Statuses} from "@utils/Statuses"
import {Placeholder} from "@components/Placeholder/Placeholder";
import {LoadCommentsIfNotExist} from "@store/CommentsSlice/loadCommentsIfNotExist";
import {selectCommentsStatusGet} from "@store/CommentsSlice/selectors";
import {CommentForm} from "@components/CommentForm/CommentForm";
import {selectCommentsStatusSend} from "@store/CommentsSlice/selectors";
import {WidgetComment} from "@components/WidgetComment/WidgetComment";
import { CommentsCardPlaceholder } from "../../components/CommentCard/CommentsCard"

export const CommentsPage = () => {
    const dispatch = useDispatch()
    useEffect(() => dispatch(LoadCommentsIfNotExist), [])
    const comments = useSelector(selectComments)
    const statusGet = useSelector(selectCommentsStatusGet)
    const statusSend = useSelector(selectCommentsStatusSend)

    if (statusGet === Statuses.inProgress) {
        return (
            <div className={styles.root}>
                <CommentForm />
                <CommentsCardPlaceholder />
                <CommentsCardPlaceholder />
                <CommentsCardPlaceholder />
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
