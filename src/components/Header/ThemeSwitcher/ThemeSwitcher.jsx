import React from "react"
import styles from "./ThemeSwitcher.module.css"
import { Button } from "../../Button/Button"
import sun from "./sun.svg"
import moon from "./moon.svg"


export const ThemeSwitcher = () =>
	<Button
		onClick={() =>
		{
			document.body.classList.toggle("darkTheme");
			localStorage.setItem("darkTheme", document.body.classList.contains("darkTheme"));
		}}
		className={styles.root}
	>
		<img src={sun} alt="Sun" className={styles.img_sun} />
		<img src={moon} alt="Moon" className={styles.img_moon} />
	</Button>
