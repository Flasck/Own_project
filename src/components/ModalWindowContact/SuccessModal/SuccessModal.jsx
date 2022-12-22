import React from "react";
import styles from "@components/ModalWindowContact/ModalWindowContact.module.css";
import { FeedbackSlice } from "@store/FeedbackSlice";
import { Statuses } from "@utils/Statuses";
import { Button } from "@components/Button/Button";
import { classNames } from "@utils/classNames";
import { useDispatch, useSelector } from "react-redux";
import { selectConstants } from "@store/ConstantsSlice/selectors";

export const SuccessModal = ({ setView }) =>
{
	const dispatch = useDispatch()
	const texts = useSelector(selectConstants)

	return <div
		className={styles.modal}
		onClick={() =>
		{
			setView(false)
			dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
		}}
	>
		<div className={styles.content} onClick={e => e.stopPropagation()}>
			<p className={styles.StatusText}>{texts?.mainPage?.modalWindowContact?.onSuccess}</p>
			<Button
				onClick={() =>
				{
					setView(false)
					dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
				}}
				className={classNames(styles.btn, styles.btn_status)}
			>
				{texts?.mainPage?.modalWindowContact?.buttonOk}
			</Button>
		</div>
	</div>
}
