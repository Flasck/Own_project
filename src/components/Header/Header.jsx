import React from "react"
import styles from "./Header.module.css"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { ThemeSwither } from "./ThemeSwither/ThemeSwither"
import { classnames } from "@utils/classnames"

import { LanguageSlice } from "@store/LanguageSlice/index"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { selectConstants } from "@store/ConstantsSlice/selectors"


export const Header = ({ className }) =>
{
	const curLang = useSelector(selectLanguage);
	const text = useSelector(selectConstants);
	const dispatch = useDispatch();

	return <header className={classnames(styles.root, className)}>
		<div className={styles.container}>
			<span className={styles.brand}>Turtle</span>

			<NavLink className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)} to={"/"}>
				{text?.header?.mainPage}
			</NavLink>
			<NavLink className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)} to={"/OurCases"}>
				{text?.header?.projectsPage}
			</NavLink>

			<span className={styles.switchers}>
				<button
					className={classnames(styles.langSwitch, styles.link, curLang === "ru" && styles.linkActive)}
					onClick={() => dispatch(LanguageSlice.actions.changeLang("ru"))}
				>
					рус
				</button>
				<button
					className={classnames(styles.langSwitch, styles.link, curLang === "en" && styles.linkActive)}
					onClick={() => dispatch(LanguageSlice.actions.changeLang("en"))}
				>
					eng
				</button>
				<ThemeSwither />
			</span>
		</div>
	</header>
}
