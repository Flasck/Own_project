import React from "react"
import { useSelector } from "react-redux";
import { selectLanguage } from "@store/LanguageSlice/selectors";
import styles from "./NotFoundPage.module.css"

export const NotFoundPage = () =>
{
	const lang = useSelector(selectLanguage);

	return <div className={styles.wrapper}>
		<h3 className={styles.title}>
			{
				lang === "en"
					? "Данной страницы не существует"
					: "This page Not Found"
			}
		</h3>
	</div>
}
