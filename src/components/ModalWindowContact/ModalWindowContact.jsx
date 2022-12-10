import React, {useState} from 'react'
import styles from './ModalWindowContact.module.css'
import {useForm} from 'react-hook-form'
import closeIcon from './closeIcon.svg'
export const ModalWindowContact = ({active, setActive}) => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: 'onBlur'})
    const {check, setb} = useState(false)
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return <>
        <div className={active ? styles.modal_active : styles.modal} onClick={() => {setActive(false)}}>
            <div className={styles.modal__content} onClick={(e) => {e.stopPropagation()}}>
                <a onClick={() => {setActive(false)}} className={styles.modal__closeIcon} >
                    <img className={styles.modal__closeIcon__img} src={closeIcon} alt='closeIcon'/>
                </a>
                <h2 className={styles.modal__title}>Форма для связи с нами</h2>
                <form className={styles.modal__form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.modal__form__block}>
                        <label className={styles.modal__form__block__label}>Как вас зовут</label>
                        <input {...register('Name', {
                            required: 'Имя должно быть введено!',
                            minLength: {
                                value: 3,
                                message: 'Минимум 3 символа!'
                            }
                        })} className={styles.modal__form__block__input} type="text"/>
                        <div className={styles.modal__form__block__error}>
                            {errors?.Name && <p>{errors?.Name.message || 'Error'}</p>}
                        </div>
                    </div>
                    <div className={styles.modal__form__block}>
                        <label className={styles.modal__form__block__label}>Ваш Email</label>
                        <input {...register('Email', {
                            required: 'Email должен быть веден!',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email некоректен!"
                            }
                        })} className={styles.modal__form__block__input} type="text"/>
                        <div className={styles.modal__form__block__error}>
                            {errors?.Email && <p>{errors?.Email.message || 'Error'}</p>}
                        </div>
                    </div>
                    <div className={styles.modal__form__blockArea}>
                        <label className={styles.modal__form__block__labelArea}>Ваше сообщение</label>
                        <textarea
                            {...register('Message',
                                {
                                    required: 'Message должен быть веден!',
                                    minLength: {
                                        value: 50,
                                        message: "Минимум 50 символов!"
                                    },
                                    maxLength: {
                                        value: 300,
                                        message: "Максимум 300 символов!"
                                    }
                                })}
                            className={styles.modal__form__block__textArea}
                            name="Message"
                        />
                        <div className={styles.modal__form__block__error}>
                            {errors?.Message && <p>{errors?.Message.message || 'Error'}</p>}
                        </div>
                    </div>
                    <div className={styles.modal__form__block}>
                        <a className={styles.customCheckBox} onClick={()=>{setb(true)}}>
                            <svg  width="26" height="20" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 9.89474L9.07143 17L24 2" stroke={check ? '#16161A' : 'none'} strokeWidth="3"/>
                            </svg>
                        </a>
                        <label className={styles.modal__form__block__label}>Даю согласие на обработку персональных данных</label>
                    </div>
                    <button disabled={!isValid} type='submit' className={styles.modal__btn}>Отправить</button>
                </form>
            </div>
        </div>
    </>
}