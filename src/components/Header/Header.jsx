import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { classnames } from "@utils/classnames"

import { LanguageSlice } from "@store/LanguageSlice/index"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { ThemeSwither } from "./ThemeSwither/ThemeSwither"
import styles from "./Header.module.css"
import { Placeholder } from "../Placeholder/Placeholder"
import { MenuIcon } from "./MenuButton/MenuButton"


export const Header = ({ className }) =>
{
	const curLang = useSelector(selectLanguage)
	const text = useSelector(selectConstants)
	const dispatch = useDispatch()
	const linksRef = useRef();
	useEffect(() =>
	{
		linksRef.current?.addEventListener?.("click", () =>
		{
			linksRef.current.classList.remove(styles.links_active);
		})
	}, [linksRef]);

	return <header className={classnames(styles.root, className)}>
		<div className={styles.container}>
			<MenuIcon className={styles.menu} onClick={() => linksRef.current?.classList?.add?.(styles.links_active)} />
			<span className={styles.brand}>Turtle</span>

			<span className={styles.links} ref={linksRef}>
				<NavLink className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)} to="/">
					{text ? text.header.mainPage : <Placeholder width={11} />}
				</NavLink>
				<NavLink
					className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)}
					to="/OurCases"
				>
					{text ? text.header.projectsPage : <Placeholder width={11} />}
				</NavLink>
				<NavLink
					className={({ isActive }) => classnames(styles.link, isActive && styles.linkActive)}
					to="/CommentsPage"
				>
					{text ? text.header.commentsPage : <Placeholder width={8} />}
				</NavLink>
			</span>

			<span className={styles.switchers}>
				<span className={styles.switchers__lang}>
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
				</span>
				<ThemeSwither />
			</span>
		</div>
	</header>
}
