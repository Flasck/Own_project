import React from "react"
import { useSelector } from "react-redux"
import { Spinner } from "@components/Spinner/Spinner"
import { selectConstants, selectConstantsIsLoaded } from "@store/ConstantsSlice/selectors"
import styles from "./PersonalDataPage.module.css"


export const PersonalDataPage = () =>
{
	const status = useSelector(selectConstantsIsLoaded)
	const text = useSelector(selectConstants)

	if (!status)
	{
		return <div className={styles.wrapper_spinner}>
			<Spinner />
		</div>
	}

	return <div className={styles.root}>
		<h2 className={styles.title}>{text?.personalDataPage.title}</h2>
		<section>{text?.personalDataPage.data.split("\n").map(p => <p>{p}</p>)}</section>
	</div>
}
