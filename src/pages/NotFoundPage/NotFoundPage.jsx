import React from 'react'
import styles from './NotFoundPage.module.css'
import {useSelector} from "react-redux";
import { selectLanguage } from '../../store/LanguageSlice/selectors';

export const NotFoundPage = () => {

    const lang = useSelector(selectLanguage);

    if (lang === 'ru') return <div className={styles.wrapper}>
        <h3 className={styles.title}>Данной страницы не существует</h3>
    </div>

    if (lang === 'en') return <div className={styles.wrapper}>
        <h3 className={styles.title}>This page Not Found</h3>
    </div>

}