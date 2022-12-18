import React from "react";
import styles from "./HeroBlock.module.css";
import { useSelector } from "react-redux";
import { Card } from "./Card/Card.jsx";
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { Placeholder } from "@components/Placeholder/Placeholder";


export const HeroBlock = () =>
{
    const texts = useSelector(selectConstants);
    if (!texts) return renderPlaceholder();

    return <section className={styles.root}>
        <div className={styles.leftBlock}>
            <h2 className={styles.title}>{texts?.mainPage?.heroBlock?.title}</h2>
            <p className={styles.subTitle}>{texts?.mainPage?.heroBlock?.subtitle}</p>
        </div>
        <div className={styles.rightBlock}>
            <Card title={"01"} text={texts?.mainPage?.heroBlock?.card1} />
            <Arrow/>
            <Card title={"02"} text={texts?.mainPage?.heroBlock?.card2} />
            <Arrow/>
            <Card title={"03"} text={texts?.mainPage?.heroBlock?.card3} />
        </div>
    </section>
}


const Arrow = () =>
    <svg className={styles.arrow} width="29" height="17" viewBox="0 0 29 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={styles.arrow__path} width="29" height="17" d="M1.5 2L14.8939 14L27.5 2" stroke="black" strokeWidth="3" />
    </svg>


const renderPlaceholder = () =>
    <section className={styles.root}>
        <div className={styles.leftBlock}>
            <Placeholder className={styles.title} height={3}/>
            <Placeholder className={styles.subTitle} height={3}/>
        </div>
        <div className={styles.rightBlock}>
            <Card title={"01"} text={<Placeholder height={3}/>} />
            <Arrow />
            <Card title={"02"} text={<Placeholder height={3}/>} />
            <Arrow />
            <Card title={"03"} text={<Placeholder height={4}/>} />
        </div>
    </section>
