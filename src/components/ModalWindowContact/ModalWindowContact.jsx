import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@components/Button/Button"
import { Link } from "react-router-dom"
import { SendFeedBack } from "@store/FeedbackSlice/sendFeedBack"
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { classNames } from "@utils/classNames"
import { selectIsFeedBackSuccess } from "@store/FeedbackSlice/selectors"
import styles from "./ModalWindowContact.module.css"

export const ModalWindowContact = ({ setView }) => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" })
	const dispatch = useDispatch()
	const isFeedBackSuccess = useSelector(selectIsFeedBackSuccess)
	const [CheckBox, setCheckBox] = useState(false)
	const texts = useSelector(selectConstants)
	const onSubmit = (data) => {
		dispatch(SendFeedBack(data))
		setCheckBox((e) => !e)
		setView((e) => !e)
	}

	useEffect(() => {
		reset()
	}, [isFeedBackSuccess])

	return (
		<div className={styles.modal} onClick={() => setView((e) => !e)}>
			<div className={styles.content} onClick={(e) => e.stopPropagation()}>
				<button onClick={() => setView((e) => !e)} className={styles.closeBtn}>
					<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 22L22 2" className={styles.closeBtn__path} strokeWidth="3" />
						<path d="M22 22L2 2" className={styles.closeBtn__path} strokeWidth="3" />
					</svg>
				</button>
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
									value: /^[a-zа-яё]+$/i,
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
						<div className={styles.error}>{errors?.author && <p>{errors?.author.message || "Error"}</p>}</div>
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
					<div className={classNames(styles.form__block, styles.form__textArea)}>
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
					<div className={classNames(styles.form__block, styles.form__checkBox)} onClick={() => setCheckBox((e) => !e)}>
						<button className={styles.customCheckBox} type="button">
							<svg width="11" height="8" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									className={styles.customCheckBox_path}
									d="M2 9.89474L9.07143 17L24 2"
									display={CheckBox ? "block" : "none"}
									strokeWidth="3"
								/>
							</svg>
						</button>
						<span className={styles.label}>
							{texts?.mainPage?.modalWindowContact?.checkBoxLabel.split(" ").slice(0, -2)?.join(" ")}
							&nbsp;
							<Link onClick={(e) => e.stopPropagation()} target="_blank" to="/personalData" className={styles.label__link}>
								{texts?.mainPage?.modalWindowContact?.checkBoxLabel.split(" ").slice(-2)?.join(" ")}
							</Link>
						</span>
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
