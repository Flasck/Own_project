import React from "react"
import styles from "./Footer.module.css"
import { useSelector } from "react-redux";
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { Placeholder } from "@components/Placeholder/Placeholder";


export const Footer = () =>
{
    const texts = useSelector(selectConstants);

    return <footer className={styles.root}>
        <div className={styles.container}>
            <div>{texts ? texts.footer.text1 : <Placeholder width={36}/>}</div>
            <div>{texts ? texts.footer.text2 : <Placeholder width={32}/>}</div>
        </div>
    </footer>
}
