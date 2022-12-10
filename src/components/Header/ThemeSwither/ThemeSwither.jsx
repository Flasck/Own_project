import React, { useEffect, useState } from 'react'
import { Button } from '../../Button/Button'
import styles from './ThemeSwither.module.css'
import sun from "./sun.svg"
import moon from "./moon.svg"

export const ThemeSwither = () =>
{
    const [darkTheme, setDarkTheme] = useState(getTheme());

    useEffect(() =>
    {
        document.body.classList.toggle("darkTheme", darkTheme);
        localStorage.setItem("darkTheme", darkTheme);
    }, [darkTheme]);

    return <Button onClick={() => setDarkTheme(!darkTheme)} className={styles.root}>
            <img src={darkTheme ? sun : moon} className={styles.img}></img>
        </Button>
}

function getTheme()
{
    let darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme == null)
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return darkTheme == "true";
}
