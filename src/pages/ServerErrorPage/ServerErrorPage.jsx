import React from "react"
import { useSelector } from "react-redux"
import styles from "./ServerErrorPage.module.css"
import { selectLanguage } from "../../store/LanguageSlice/selectors"
import { Button } from "../../components/Button/Button"

export const ServerErrorPage = () =>
{
	const lang = useSelector(selectLanguage)
	let text = "An internal server error has occurred. Please try to reload the page"
	if (lang === "ru") text = "Произошла внутренняя ошибка сервера. Пожалуйста, попробуйте перезагрузить страницу"

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>{text}</h3>
			<Button className={styles.reload} onClick={() => window.location.reload()}>
				{lang === "ru" ? "Обновить" : "Update"}
			</Button>
		</div>
	)
}
