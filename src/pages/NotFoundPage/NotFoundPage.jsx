import React from "react"
import { useSelector } from "react-redux"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import styles from "./NotFoundPage.module.css"

export const NotFoundPage = () =>
{
	const lang = useSelector(selectLanguage)

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{lang === "en" ? "This page Not Found" : "Данной страницы не существует"}</h3>
		</div>
	)
}
