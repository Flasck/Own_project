import React, { useEffect } from "react"
import { Button } from "../../Button/Button"
import styles from "./ThemeSwither.module.css"
import sun from "./sun.svg"
import moon from "./moon.svg"

export const ThemeSwither = () => {
    return (<Button onClick={() =>
    {

        document.body.classList.toggle("darkTheme");
        localStorage.setItem("darkTheme", document.body.classList.contains("darkTheme"));
    }} className={styles.root}>
        <img src={sun} className={styles.img_sun}></img>
        <img src={moon} className={styles.img_moon}></img>
    </Button>)
}