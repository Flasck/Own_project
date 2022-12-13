import React, { useEffect } from "react"
import styles from "./MapBlock.module.css"
import { useDispatch, useSelector } from "react-redux";
import { Statuses } from "@utils/Statuses";

import { YMaps } from "@pbe/react-yandex-maps";
import { ContactButton } from "./ContactButton/ContactButton"
import { OurMap } from "./OurMap/OurMap"
import { PlacesList } from "./PlacesList/PlacesList"

import { FeedbackSlice } from "@store/FeedbackSlice";
import { LoadMapIfNotExist } from "@store/MapSlice/LoadMapIfNotExist";
import { selectAllPlaces, selectStatusMap } from "@store/MapSlice/selectors"


export const MapBlock = () =>
{
	const dispatch = useDispatch();
	const allPlaces = useSelector((state) => selectAllPlaces(state));
	const statusLoadMap = useSelector((state) => selectStatusMap(state));

	useEffect(() => dispatch(LoadMapIfNotExist()), []);

	if (statusLoadMap === Statuses.inProgress || allPlaces === null)
		return <div className={styles.wrapper}>
			<svg className={styles.loadingIcon}
				xmlns="http://www.w3.org/2000/svg" height="48" width="48">
				<path
					className={styles.loadingIcon__path}
					d="M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z"
				/>
			</svg>
		</div>

	return <section>
		<div className={styles.title}>
			<h2 className={styles.title__text}>Контактная информация</h2>
			<ContactButton onClick={() => dispatch(FeedbackSlice.actions.changeView())} />
		</div>
		<div className={styles.container}>
			<PlacesList />
			<YMaps>
				<OurMap />
			</YMaps>
		</div>
	</section>
}
