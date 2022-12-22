import React from "react";
import { Spinner } from "@components/Spinner/Spinner";
import styles from "./Preloader.module.css";

export const Preloader = () =>
	<div className={styles.root}>
		<Spinner />
	</div>
