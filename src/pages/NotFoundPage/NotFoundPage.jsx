import React from 'react'
import styles from './NotFoundPage.module.css'
import {useSelector} from "react-redux";
import {selectConstants} from "@store/ConstantsSlice/selectors";
import { Placeholder } from "@components/Placeholder/Placeholder";

export const NotFoundPage = () => {
    const texts = useSelector(selectConstants);
    if (!texts) return renderPlaceholder();

    return <div className={styles.wrapper}>
        <h1 className={styles.title}>
            {texts?.notFoundPage?.title}
        </h1>
    </div>

}

const renderPlaceholder = () =>
    <div className={styles.wrapper}>
        <h1 className={styles.title}>
            {<Placeholder height={1}/>}
        </h1>
    </div>