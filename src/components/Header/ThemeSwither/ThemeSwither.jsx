import React, { useEffect, useState } from 'react'
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

    return <div className={styles.root}>
        <button onClick={() => setDarkTheme(!darkTheme)} className={styles.button}>
            <img src={darkTheme ? sun : moon} className={styles.img}></img>
        </button>
    </div>
}

function getTheme()
{
    let darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme == null)
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return darkTheme == "true";
}
