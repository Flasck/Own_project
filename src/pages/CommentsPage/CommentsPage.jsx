import React, { useEffect } from "react"
import { CommentsCard, CommentsCardPlaceholder } from "@components/CommentCard/CommentsCard"
import { useDispatch, useSelector } from "react-redux"
import { selectComments, selectCommentsStatusGet, selectCommentsStatusSend } from "@store/CommentsSlice/selectors"
import { Statuses } from "@utils/Statuses"
import { LoadCommentsIfNotExist } from "@store/CommentsSlice/loadCommentsIfNotExist"
import { CommentForm } from "@components/CommentForm/CommentForm"
import { WidgetComment } from "@components/WidgetComment/WidgetComment"
import styles from "./CommentsPage.module.css"

export const CommentsPage = () => {
	const dispatch = useDispatch()
	useEffect(() => dispatch(LoadCommentsIfNotExist), [])
	const comments = useSelector(selectComments)
	const statusGet = useSelector(selectCommentsStatusGet)
	const statusSend = useSelector(selectCommentsStatusSend)

	return statusGet === Statuses.inProgress ? (
		<div className={styles.root}>
			<CommentForm />
			<CommentsCardPlaceholder />
			<CommentsCardPlaceholder />
			<CommentsCardPlaceholder />
		</div>
	) : (
		<div className={styles.root}>
			<CommentForm />
			{comments?.map((el) => (
				<CommentsCard key={"CP" + el.id} data={el} />
			))}
			{statusSend !== Statuses.idle ? <WidgetComment /> : ""}
		</div>
	)
}
