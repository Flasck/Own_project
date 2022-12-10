import React from "react"
import { HeroBlock } from "../../components/HeroBlock/HeroBlock"
import { MapBlock } from "../../components/MapBlock/MapBlock"
import { TeamSlider } from "../../components/TeamSlider/TeamSlider"
import styles from "./MainPage.module.css"

export const MainPage = () => (
	<>
		<HeroBlock />
		<TeamSlider />
		<MapBlock />
	</>
)
