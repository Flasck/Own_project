import React, { useState } from "react"
import styles from "./ModalWindowContact.module.css"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@components/Button/Button"
import { Statuses } from "@utils/Statuses"
import { classnames } from "@utils/classnames"
import { Link } from "react-router-dom"

import { FeedbackSlice } from "@store/FeedbackSlice/index.js"
import { selectModalView, selectFeedbackStatus } from "@store/FeedbackSlice/selectors"
import { SendFeedBack } from "@store/FeedbackSlice/sendFeedBack"
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { Spinner } from "@components/Spinner/Spinner"

export const ModalWindowContact = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" })
	const dispatch = useDispatch()
	const statusModalView = useSelector(selectModalView)
	const statusModalRequest = useSelector(selectFeedbackStatus)
	const [CheckBox, setCheckBox] = useState(false)
	const texts = useSelector(selectConstants)
	const onSubmit = (data) => dispatch(SendFeedBack(data))
	const label_text = texts?.mainPage?.modalWindowContact?.checkBoxLabel.split(" ").slice(0, -2)
	const link_text = texts?.mainPage?.modalWindowContact?.checkBoxLabel.split(" ").slice(-2)

	if (statusModalRequest === Statuses.success) {
		return renderSuccess(statusModalView, dispatch, setCheckBox, reset, texts)
	}
	if (statusModalRequest === Statuses.failed) return renderFailed(statusModalView, dispatch, texts)

	if (statusModalRequest === Statuses.inProgress) return renderInProgress(statusModalView, dispatch)

	return (
		<div
			className={statusModalView ? styles.modal_active : styles.modal}
			onClick={() => dispatch(FeedbackSlice.actions.changeView())}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<CloseBtn onClick={() => dispatch(FeedbackSlice.actions.changeView())} className={styles.closeBtn} />
				<h2 className={styles.title}>{texts?.mainPage?.modalWindowContact?.title}</h2>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.form__block}>
						<label className={styles.label} htmlFor="input_author">
							{texts?.mainPage?.modalWindowContact?.author?.text}
						</label>
						<input
							{...register("author", {
								required: texts?.mainPage?.modalWindowContact?.author?.required,
								pattern: {
									value: /^[a-zаА-яЯё]+$/i,
									message: texts?.mainPage?.modalWindowContact?.author?.notPattern,
								},
								minLength: {
									value: 3,
									message: texts?.mainPage?.modalWindowContact?.author?.minLength,
								},
							})}
							className={styles.input}
							type="text"
							id="input_author"
						/>
						<div className={styles.error}>
							{errors?.author && <p>{errors?.author.message || "Error"}</p>}
						</div>
					</div>
					<div className={styles.form__block}>
						<label className={styles.label} htmlFor="input_email">
							{texts?.mainPage?.modalWindowContact?.email?.text}
						</label>
						<input
							{...register("email", {
								required: texts?.mainPage?.modalWindowContact?.email?.required,
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: texts?.mainPage?.modalWindowContact?.email?.notPattern,
								},
							})}
							className={styles.input}
							type="text"
							id="input_email"
						/>
						<div className={styles.error}>{errors?.email && <p>{errors?.email.message || "Error"}</p>}</div>
					</div>
					<div className={styles.form__block} style={{ marginBottom: "35px" }}>
						<label className={styles.label} htmlFor="input_text">
							{texts?.mainPage?.modalWindowContact?.text?.text}
						</label>
						<textarea
							{...register("text", {
								required: texts?.mainPage?.modalWindowContact?.text?.required,
								minLength: {
									value: 6,
									message: texts?.mainPage?.modalWindowContact?.text?.minLength,
								},
								maxLength: {
									value: 1000,
									message: texts?.mainPage?.modalWindowContact?.text?.maxLength,
								},
							})}
							className={styles.textArea}
							name="text"
							id="input_text"
						/>
						<div className={styles.error}>{errors?.text && <p>{errors?.text.message || "Error"}</p>}</div>
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
						<label className={styles.label}>
							{label_text?.join(" ")}&nbsp;
							<Link onClick={(e)=>e.stopPropagation()} target='_blank' to={"/personalData"} className={styles.label__link}>{link_text?.join(" ")}</Link>
						</label>
					</div>
					<div className={styles.wrapper}>
						<Button disabled={!isValid || !CheckBox} type="submit" className={styles.btn}>
							{texts?.mainPage?.modalWindowContact?.buttonSend}
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

function renderSuccess(statusModalView, dispatch, setCheckBox, reset, texts) {
	return (
		<div
			className={statusModalView ? styles.modal_active : styles.modal}
			onClick={() => {
				dispatch(FeedbackSlice.actions.changeView())
				dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
				setCheckBox((e) => !e)
				reset()
			}}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<p className={styles.StatusText}>{texts?.mainPage?.modalWindowContact?.onSuccess}</p>
				<Button
					onClick={() => {
						dispatch(FeedbackSlice.actions.changeView())
						dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
						setCheckBox((e) => !e)
						reset()
					}}
					className={classnames(styles.btn, styles.btn_status)}
				>
					{texts?.mainPage?.modalWindowContact?.buttonOk}
				</Button>
			</div>
		</div>
	)
}

function renderFailed(statusModalView, dispatch, texts) {
	return (
		<div
			className={statusModalView ? styles.modal_active : styles.modal}
			onClick={() => {
				dispatch(FeedbackSlice.actions.changeView())
				dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
			}}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<p className={styles.StatusText}>{texts?.mainPage?.modalWindowContact?.onFailed}</p>
				<Button
					onClick={() => {
						dispatch(FeedbackSlice.actions.changeStatus(Statuses.idle))
						dispatch(FeedbackSlice.actions.changeView())
					}}
					className={classnames(styles.btn, styles.btn_status)}
				>
					{texts?.mainPage?.modalWindowContact?.buttonOk}
				</Button>
			</div>
		</div>
	)
}

function renderInProgress(statusModalView, dispatch) {
	return (
		<div
			className={statusModalView ? styles.modal_active : styles.modal}
			onClick={() => dispatch(FeedbackSlice.actions.changeView())}
		>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<Spinner />
			</div>
		</div>
	)
}

const CloseBtn = ({ onClick, className }) => (
	<a onClick={onClick} className={className}>
		<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 22L22 2" className={styles.closeBtn__path} strokeWidth="3" />
			<path d="M22 22L2 2" className={styles.closeBtn__path} strokeWidth="3" />
		</svg>
	</a>
)
