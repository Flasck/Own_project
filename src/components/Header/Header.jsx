import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { classnames } from '../../utils/classnames'
import styles from './Header.module.css'
import { ThemeSwither } from './ThemeSwither/ThemeSwither'

export const Header = ({ className }) =>
    <header className={classnames(styles.root, className)}>
        <div className={styles.container}>
            <span className={styles.brand}>Turtle</span>
            <NavLink className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)} to={"/"}>Наша команда</NavLink>
            <NavLink className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)} to={"/OurCases"}>Наши проекты</NavLink>
            <span className={styles.switchers}>
                <button className={classnames(styles.langSwitch, styles.link, true && styles.linkActive)}>рус</button>
                <button className={classnames(styles.langSwitch, styles.link, false && styles.linkActive)}>eng</button>
                <ThemeSwither />
            </span>
        </div>
    </header>
