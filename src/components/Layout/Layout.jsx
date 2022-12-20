import React from "react"
import { Header } from "@components/Header/Header";
import { Footer } from "@components/Footer/Footer";
import styles from "./Layout.module.css"


export const Layout = ({ children }) =>
	<div className={styles.root}>
		<Header className={styles.header} />
		<div className={styles.container}>
			<div className={styles.content}>{children}</div>
		</div>
		<Footer />
	</div>
