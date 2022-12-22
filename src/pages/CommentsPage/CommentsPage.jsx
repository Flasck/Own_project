import React, { useEffect } from "react"
import { CommentsCard } from "@components/CommentCard/CommentsCard"
import { CommentsCardPlaceholder } from "@components/CommentCard/CommentsCardPlaceholder"
import { useDispatch, useSelector } from "react-redux"
import { selectComments, selectCommentsStatusGet, selectCommentsStatusSend } from "@store/CommentsSlice/selectors"
import { Statuses } from "@utils/Statuses"
import { LoadCommentsIfNotExist } from "@store/CommentsSlice/loadCommentsIfNotExist"
import { CommentForm } from "@components/CommentForm/CommentForm"
import styles from "./CommentsPage.module.css"

export const CommentsPage = () =>
{
	const dispatch = useDispatch()
	useEffect(() => dispatch(LoadCommentsIfNotExist), [])
	const comments = useSelector(selectComments)
	const statusGet = useSelector(selectCommentsStatusGet)

	return statusGet === Statuses.inProgress ? (
		<>
			<CommentForm />
			<section className={styles.container}>
				<CommentsCardPlaceholder />
				<CommentsCardPlaceholder />
				<CommentsCardPlaceholder />
			</section>
		</>
	) : (
		<>
			<CommentForm />
			<section className={styles.container}>
				{comments?.map(el => (
					<CommentsCard key={`CP${el.id}`} data={el} />
				))}
			</section>
		</>
	)
}
