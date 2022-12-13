import React from "react";
import styles from "./HeroBlock.module.css";
import { Card } from "./Card/Card.jsx";


export const HeroBlock = () =>
    <section className={styles.root}>
        <div className={styles.leftBlock}>
            <h2 className={styles.title}>разработка сайтов под ключ</h2>
            <p className={styles.subTitle}>Разработаем сайт, исходя из Вашего рынка, геогрaфии, портрета клиента и внутренних бизнес-процессов</p>
        </div>
        <div className={styles.rightBlock}>
            <Card title={"01 -------"} text={"Аналитика и маркетинг, как основа принятия решения при создании сайта'"} />
            <Arrow/>
            <Card title={"02 -------"} text={"SEO проектирование сайта с охватом до 99% целевой аудитории'"} />
            <Arrow/>
            <Card title={"03 -------"} text={"Коэффициент конверсии в 2-3,5 раза выше среднерыночного (Но тут уже как красивее по длине будет)"} />
        </div>
    </section>


const Arrow = () =>
    <svg className={styles.arrow} width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={styles.arrow__path} width="29" height="17" d="M1.5 2L14.8939 14L27.5 2" stroke="black" strokeWidth="3" />
    </svg>
