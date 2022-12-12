import React from 'react'
import styles from './HeroBlock.module.css'
import {Card} from './Card/Card.jsx'

export const HeroBlock = () => {
    return <>
        <div className={styles.container}>
            <div className={styles.left_side}>
                <div className={styles.left_side__wrapper}>
                    <h2 className={styles.left_side__title}>РАЗРАБОТКА САЙТОВ ПОД КЛЮЧ</h2>
                    <p className={styles.left_side__description}>Разработаем сайт, исходя из Вашего рынка, геогрaфии, портрета клиента и внутренних бизнес-процессов</p>
                </div>
            </div>
            <div className={styles.right_side}>
                <Card title={'01 -------'} text={'Аналитика и маркетинг, как основа принятия решения при создании сайта'}/>
                <svg className={styles.downArrow} width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.downArrowPath} width="29" height="17" d="M1.5 2L14.8939 14L27.5 2" stroke="black" strokeWidth="3"/>
                </svg>
                <Card title={'02 -------'} text={'SEO проектирование сайта с охватом до 99% целевой аудитории'}/>
                <svg className={styles.downArrow} width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.downArrowPath} width="29" height="17" d="M1.5 2L14.8939 14L27.5 2" stroke="black" strokeWidth="3"/>
                </svg>
                <Card title={'03 -------'} text={'Коэффициент конверсии в 2-3,5 раза выше среднерыночного (Но тут уже как красивее по длине будет)'}/>
            </div>
        </div>
    </>
}