import React from "react"
import styles from "./PersonalDataPage.module.css"
import { useSelector } from "react-redux"
import { Spinner } from "@components/Spinner/Spinner"
import { selectConstants, selectConstantsIsLoaded } from "@store/ConstantsSlice/selectors"

export const PersonalDataPage = () => {
	const status = useSelector(selectConstantsIsLoaded)
	const text = useSelector(selectConstants)

	if (!status) {
		return (
			<div className={styles.wrapper_spinner}>
				<Spinner />
			</div>
		)
	}

	return (
		<div className={styles.root}>
			<div className={styles.title}>{text?.personalDataPage.data.split(" ").slice(0, 2).join(" ")}</div>
			<div>{text?.personalDataPage.data.split(" ").slice(2).join(" ")}</div>
		</div>
	)
}