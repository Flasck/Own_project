import React from 'react'
import styles from './ThemeSwither.module.css'

export const ThemeSwither = () => {
    return <div>
        <button onClick={() => document.body.classList.toggle("darkTheme")}>theme</button>
    </div>
}