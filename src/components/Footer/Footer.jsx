import React from "react"
import { useSelector } from "react-redux";
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { Placeholder } from "@components/Placeholder/Placeholder";
import styles from "./Footer.module.css"


export const Footer = () =>
{
	const texts = useSelector(selectConstants);

	return <footer className={styles.root}>
		<div className={styles.container}>
			<p>{texts ? texts.footer.text1 : <Placeholder width={36} />}</p>
			<p>{texts ? texts.footer.text2 : <Placeholder width={32} />}</p>
		</div>
	</footer>
}
