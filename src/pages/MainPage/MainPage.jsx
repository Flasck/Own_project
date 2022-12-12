import React from "react"
import { HeroBlock } from "@components/HeroBlock/HeroBlock"
import styles from "./MainPage.module.css"
import { TeamSlider } from "@components/TeamSlider/TeamSlider"
import { MapBlock } from "@components/MapBlock/MapBlock"

export const MainPage = () => {
	return (
		<>
			<HeroBlock />
			<TeamSlider />
			<MapBlock />
		</>
	)
}
