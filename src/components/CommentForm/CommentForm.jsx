import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { selectConstants } from "@store/ConstantsSlice/selectors";
import { SendComment } from "@store/CommentsSlice/sendComment";
import { Button } from "@components/Button/Button"
import { selectCommentsStatusSend } from "@store/CommentsSlice/selectors";
import { Statuses } from "@utils/Statuses";
import { RatingStars } from "@components/RatingStars/RatingStars";
import { Placeholder } from "@components/Placeholder/Placeholder";
import { WidgetComment } from "@components/WidgetComment/WidgetComment"
import styles from "./CommentForm.module.css";

export const CommentForm = () =>
{
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm({ mode: "onBlur" })
	const dispatch = useDispatch()
	const texts = useSelector(selectConstants)
	const status = useSelector(selectCommentsStatusSend)
	const [countStars, setCountStars] = useState(4.5)
	const btnIsDisabled = !isValid || status !== Statuses.idle || !texts
	const onSubmit = data =>
	{
		dispatch(SendComment({ ...data, rate: countStars }));
		reset()
	}

	return <section className={styles.content}>
		<h2 className={styles.title}>{texts ? texts.commentsPage.title : <Placeholder width={20} />}</h2>
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.form__topBlock}>
				<div className={styles.form__block}>
					<label className={styles.label} htmlFor="input_author">
						{texts ? texts?.mainPage?.modalWindowContact?.author?.text : <Placeholder width={15} />}
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
				<div className={styles.form__block__rating}>
					<RatingStars count={countStars} cb={e => setCountStars(e)} isWorking big />
				</div>
			</div>
			<div className={styles.form__block} style={{ marginBottom: "35px" }}>
				<label className={styles.label} htmlFor="input_text">
					{texts ? texts?.mainPage?.modalWindowContact?.text?.text : <Placeholder width={25} />}
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
			<div className={styles.wrapper}>
				{status !== Statuses.idle ? <WidgetComment /> : ""}
				<Button disabled={btnIsDisabled} type="submit" className={styles.btn}>
					{texts ? texts?.mainPage?.modalWindowContact?.buttonSend : <Placeholder width={8.5} />}
				</Button>
			</div>
		</form>
	</section>
}
