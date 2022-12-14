import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Statuses } from "@utils/Statuses"

import { YMaps } from "@pbe/react-yandex-maps"
import { Placeholder } from "@components/Placeholder/Placeholder"

import { LoadMapIfNotExist } from "@store/MapSlice/LoadMapIfNotExist"
import { selectAllPlaces, selectStatusMap } from "@store/MapSlice/selectors"
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { PlacesList } from "./PlacesList/PlacesList"
import { OurMap } from "./OurMap/OurMap"
import { ContactButton } from "./ContactButton/ContactButton"
import styles from "./MapBlock.module.css"

export const MapBlock = ({ setViewModal }) =>
{
	const dispatch = useDispatch()
	const allPlaces = useSelector(selectAllPlaces)
	const statusLoadMap = useSelector(selectStatusMap)
	const curLang = useSelector(selectLanguage)
	const texts = useSelector(selectConstants)

	useEffect(() => dispatch(LoadMapIfNotExist()), [curLang])

	return (
		<section>
			<div className={styles.title}>
				<h3 className={styles.title__text}>{texts ? texts.mainPage.mapBlock.title : <Placeholder width={20} />}</h3>
				<ContactButton onClick={() => setViewModal(e => !e)}>
					{texts ? texts.mainPage.mapBlock.contactButton : <Placeholder width={12} />}
				</ContactButton>
			</div>
			{statusLoadMap === Statuses.inProgress || allPlaces === null ? (
				<div className={styles.wrapper}>
					<Placeholder height={300} unitH="px" disableText />
				</div>
			) : (
				<div className={styles.container}>
					<PlacesList />
					<YMaps>
						<OurMap />
					</YMaps>
				</div>
			)}
		</section>
	)
}
