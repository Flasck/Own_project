import React from "react"
import { useSelector } from "react-redux";
import { selectConstants } from "@store/ConstantsSlice/selectors";
import { Placeholder } from "@components/Placeholder/Placeholder";
import styles from "./NotFoundPage.module.css"


export const NotFoundPage = () =>
{
	const texts = useSelector(selectConstants);
	if (!texts) return renderPlaceholder();

	return <div className={styles.wrapper}>
		<h3 className={styles.title}>
			{texts?.notFoundPage?.title}
		</h3>
	</div>
}

const renderPlaceholder = () =>
	<div className={styles.wrapper}>
		<h3 className={styles.title}>
			<Placeholder height={1} />
		</h3>
	</div>
