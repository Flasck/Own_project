import React from "react"
import styles from "./ThemeSwither.module.css"
import { Button } from "../../Button/Button"
import sun from "./sun.svg"
import moon from "./moon.svg"


export const ThemeSwither = () =>
	<Button
		onClick={() =>
		{
			document.body.classList.toggle("darkTheme");
			localStorage.setItem("darkTheme", document.body.classList.contains("darkTheme"));
		}}
		className={styles.root}
	>
		<img src={sun} className={styles.img_sun} />
		<img src={moon} className={styles.img_moon} />
	</Button>
