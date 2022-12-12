import React from "react"
import { HeroBlock } from "@components/HeroBlock/HeroBlock"
import styles from "./MainPage.module.css"
import { TeamSlider } from "@components/TeamSlider/TeamSlider"
import { MapBlock } from "@components/MapBlock/MapBlock"
import {ModalWindowContact} from "@components/ModalWindowContact/ModalWindowContact";

export const MainPage = () => {
	return (
		<>
			<ModalWindowContact/>
			<HeroBlock />
			<TeamSlider />
			<MapBlock />
		</>
	)
}
