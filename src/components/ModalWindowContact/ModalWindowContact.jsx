import React, { useState } from "react"
import styles from "./ModalWindowContact.module.css"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@components/Button/Button"
import { Statuses } from "@utils/Statuses"
import { classnames } from "@utils/classnames"

import { FeedbackSlice } from "@store/FeedbackSlice"
import { selectModalView, selectFeedbackStatus } from "@store/FeedbackSlice/selectors"
import { SendFeedBack } from "@store/FeedbackSlice/sendFeedBack"


export const ModalWindowContact = () =>
{
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" });
	const dispatch = useDispatch();
	const statusModalView = useSelector(selectModalView);
	const statusModalRequest = useSelector(selectFeedbackStatus);
	const [CheckBox, setCheckBox] = useState(false);
	const onSubmit = (data) => dispatch(SendFeedBack(data));

	if (statusModalRequest === Statuses.success)
		return renderSucces(statusModalView, dispatch, setCheckBox, reset)

	if (statusModalRequest === Statuses.failed)
		return renderFailed(statusModalView, dispatch)

	if (statusModalRequest === Statuses.inProgress)
		return renderInProgress(statusModalView, dispatch)


	return <div
		className={statusModalView ? styles.modal_active : styles.modal}
		onClick={() => dispatch(FeedbackSlice.actions.changeView())}
	>
		<div
			className={styles.content}
			onClick={(e) => e.stopPropagation()}
		>
			<h2 className={styles.title}>Свяжитесь с нами</h2>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.form__block}>
					<label className={styles.label} htmlFor="input_author">Как Вас зовут</label>
					<input
						{...register("Name", {
							required: "Имя должно быть введено!",
							minLength: {
								value: 3,
								message: "Минимум 3 символа!",
							},
						})}
						className={styles.input}
						type="text"
						id="input_author"
					/>
					<div className={styles.error}>
						{errors?.Name && <p>{errors?.Name.message || "Error"}</p>}
					</div>
				</div>
				<div className={styles.form__block}>
					<label className={styles.label} htmlFor="input_email">Ваш Email</label>
					<input
						{...register("Email", {
							required: "Email должен быть введен!",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Email некорректен!",
							},
						})}
						className={styles.input}
						type="text"
						id="input_email"
					/>
					<div className={styles.error}>
						{errors?.Email && <p>{errors?.Email.message || "Error"}</p>}
					</div>
				</div>
				<div className={styles.form__block} style={{ marginBottom: "35px" }}>
					<label className={styles.label} htmlFor="input_text">Ваше сообщение</label>
					<textarea
						{...register("Message", {
							required: "Сообщение должно быть введено!",
							minLength: {
								value: 6,
								message: "Минимум 6 символов!",
							},
							maxLength: {
								value: 1000,
								message: "Максимум 1000 символов!",
							},
						})}
						className={styles.textArea}
						name="Message"
						id="input_text"
					/>
					<div className={styles.error}>
						{errors?.Message && <p>{errors?.Message.message || "Error"}</p>}
					</div>
				</div>
				<div
					className={styles.form__block}
					style={{ flexDirection: "row" }}
					onClick={() => setCheckBox((e) => !e)}
				>
					<a className={styles.customCheckBox}>
						<svg
							width="11"
							height="8"
							viewBox="0 0 26 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className={styles.customCheckBox_path}
								d="M2 9.89474L9.07143 17L24 2"
								display={CheckBox ? "block" : "none"}
								strokeWidth="3"
							/>
						</svg>
					</a>
					<label className={styles.label}>Даю согласие на обработку персональных данных</label>
				</div>
				<div className={styles.wrapper}>
					<Button disabled={!isValid || !CheckBox} type="submit" className={styles.btn}>
						Отправить
					</Button>
				</div>
			</form>
		</div>
	</div>
}


function renderSucces(statusModalView, dispatch, setCheckBox, reset)
{
	return <div
		className={statusModalView ? styles.modal_active : styles.modal}
		onClick={() =>
		{
			dispatch(FeedbackSlice.actions.changeView())
			dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
			setCheckBox((e) => !e)
			reset()
		} }
	>
		<div
			className={styles.content}
			onClick={(e) => e.stopPropagation()}
		>
			<p className={styles.StatusText}>Форма успешно отправлена!</p>
			<Button
				onClick={() =>
				{
					dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
					dispatch(FeedbackSlice.actions.changeView())
				} }
				className={classnames(styles.btn, styles.btn_status)}
			>
				Ок
			</Button>
		</div>
	</div>
}

function renderFailed(statusModalView, dispatch)
{
	return <div
		className={statusModalView ? styles.modal_active : styles.modal}
		onClick={() =>
		{
			dispatch(FeedbackSlice.actions.changeView())
			dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
		}}
	>
		<div
			className={styles.content}
			onClick={(e) => e.stopPropagation()}
		>
			<p className={styles.StatusText}>
				Произошла ошибка.
				<br />
				Не удалось отправить форму :(
			</p>
			<Button
				onClick={() =>
				{
					dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
					dispatch(FeedbackSlice.actions.changeView())
				}}
				className={classnames(styles.btn, styles.btn_status)}
			>
				Ок
			</Button>
		</div>
	</div>

}

function renderInProgress(statusModalView, dispatch)
{
	return <div
		className={statusModalView ? styles.modal_active : styles.modal}
		onClick={() => dispatch(FeedbackSlice.actions.changeView())}
	>
		<div
			className={styles.content}
			onClick={(e) => e.stopPropagation()}
		>
			<svg className={styles.loadingIcon} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
				<path
					className={styles.loadingIcon_path}
					d="M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z" />
			</svg>
		</div>
	</div>
}
