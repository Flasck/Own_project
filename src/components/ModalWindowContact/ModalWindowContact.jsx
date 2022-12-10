import React, {useState} from 'react'
import styles from './ModalWindowContact.module.css'
import {useForm} from 'react-hook-form'
import closeIcon from '@images/ModalWindowContact/closeIcon.svg'
export const ModalWindowContact = ({active, setActive}) => {
    const {register, formState: {errors, isValid}, handleSubmit, reset} = useForm({mode: 'onBlur'})
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
                                message: 'Минимум 3 символа.'
                            }
                        })} className={styles.modal__form__block__input} type="text"/>
                    </div>
                    <div className={styles.modal__form__block__error}>
                        {errors?.Name && <p>{errors?.Name.message || 'Error'}</p>}
                    </div>
                    <div className={styles.modal__form__block}>
                        <label className={styles.modal__form__block__label}>Ваш Email</label>
                        <input {...register('Email', {
                            required: 'Email должен быть веден!',
                        })} className={styles.modal__form__block__input} type="text"/>
                    </div>
                    <div className={styles.modal__form__block__error}>
                        {errors?.Email && <p>{errors?.Email.message || 'Error'}</p>}
                    </div>
                    <div className={styles.modal__form__blockArea}>
                        <label className={styles.modal__form__block__labelArea}>Ваше сообщение</label>
                        <textarea {...register('Message', {
                            required: 'Email должен быть веден!',
                        })}  className={styles.modal__form__block__textArea} name="text"/>
                    </div>
                    <div className={styles.modal__form__block__error}>
                        {errors?.Message && <p>{errors?.Message.message || 'Error'}</p>}
                    </div>
                    <button disabled={!isValid} type='submit' className={styles.modal__btn}>Отправить</button>
                </form>
            </div>
        </div>
    </>
}