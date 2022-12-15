import React, {useEffect} from "react"
import styles from "./CommentsPage.module.css"
import {CommentsCard} from "@components/CommentCard/CommentsCard";
import {useDispatch, useSelector} from "react-redux";
import {selectComments, selectCommentsStatus} from "@store/CommentsSlice/selectors";
import {LoadProjectsIfNotExist} from "@store/CommentsSlice/loadCommentsIfNotExist";
import {Statuses} from "@utils/Statuses";
import {Spinner} from "@components/Spinner/Spinner";

export const CommentsPage = () => {
    const dispatch = useDispatch()
    const comments = useSelector(selectComments)
    const status = useSelector(selectCommentsStatus)

    useEffect(() => {
        dispatch(LoadProjectsIfNotExist)
    }, [])

    if (status === Statuses.inProgress) {
        return <div className={styles.wrapper_spinner}>
            <Spinner/>
        </div>
    }

    return <div className={styles.root}>
        {comments?.map(el => <CommentsCard key={el.id} data={el}/>)}
    </div>
}