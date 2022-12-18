import React, {useState} from "react";
import styles from "./CommentForm.module.css";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {selectConstants} from "@store/ConstantsSlice/selectors";
import {SendComment} from "@store/CommentsSlice/sendComment";
import {Button} from "@components/Button/Button.jsx"
import {selectCommentsStatusSend} from "@store/CommentsSlice/selectors";
import {Statuses} from "@utils/Statuses";
import {RatingStars} from "@components/RatingStars/RatingStars";

export const CommentForm = () => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({mode: "onBlur"})
    const dispatch = useDispatch()
    const texts = useSelector(selectConstants)
    const Status = useSelector(selectCommentsStatusSend)
    const [countStars, setCountStars] = useState(0)
    const btnIsDisabled = !isValid || Status !== Statuses.idle
    const onSubmit = (data) => {
        dispatch(SendComment({...data, rate: countStars}));
        reset()
    }

    return (
        <div className={styles.content}>
            <h2 className={styles.title}>{texts?.commentsPage?.title}</h2>
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
                <div className={styles.form__block} style={{marginBottom: "35px"}}>
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
                <RatingStars count={countStars} cb={(e)=>setCountStars(e)} isWorking={true}/>
                <div className={styles.wrapper}>
                    <Button disabled={btnIsDisabled} type="submit" className={styles.btn}>
                        {texts?.mainPage?.modalWindowContact?.buttonSend}
                    </Button>
                </div>
            </form>
        </div>
    )
}
