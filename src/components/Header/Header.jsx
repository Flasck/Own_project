import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { classnames } from "../../utils/classnames"
import styles from "./Header.module.css"
import { ThemeSwither } from "./ThemeSwither/ThemeSwither"
import { CurrentLanguageSlice } from "../../store/CurrentLanguage/index"
import { selectCurrentLang } from "../../store/CurrentLanguage/selectors"
import { selectConstantText } from "../../store/ConstantSlice/selectors"

export const Header = ({ className }) => {
	const curLan = useSelector((state) => selectCurrentLang(state))
	const text = useSelector((state) => selectConstantText(state))
	const dispatch = useDispatch()

	return (
		<header className={classnames(styles.root, className)}>
			<div className={styles.container}>
				<span className={styles.brand}>Turtle</span>
				<NavLink className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)} to={"/"}>
					{text?.header?.mainPage}
				</NavLink>
				<NavLink
					className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)}
					to={"/OurCases"}
				>
					Наши проекты
				</NavLink>
				<span className={styles.switchers}>
					<button
						className={classnames(styles.langSwitch, styles.link, curLan === "ru" && styles.linkActive)}
						onClick={() => dispatch(CurrentLanguageSlice.actions.changeLang("ru"))}
					>
						рус
					</button>
					<button
						className={classnames(styles.langSwitch, styles.link, curLan === "en" && styles.linkActive)}
						onClick={() => dispatch(CurrentLanguageSlice.actions.changeLang("en"))}
					>
						eng
					</button>
					<ThemeSwither />
				</span>
			</div>
		</header>
	)
}
