import React from "react"
import { useDispatch, useSelector } from "react-redux";

import { Map, Placemark } from "@pbe/react-yandex-maps";
import { selectAllPlaces, selectCurrentActiveMark } from "@store/MapSlice/selectors";
import { MapSlice } from "@store/MapSlice";
import iconMark from "../IconMark.svg"
import iconMarkActive from "../IconMarkActive.svg"

import styles from "./OurMap.module.css"


export const OurMap = () =>
{
	const activeMark = useSelector(selectCurrentActiveMark);
	const allPlaces = useSelector(selectAllPlaces);
	const dispatch = useDispatch();

	return <Map
		className={styles.img}
		state={{
			center: activeMark.coords != null
				? activeMark.coords : [53.751574, 44.573856],
			zoom: activeMark.coords != null ? 12 : 5,
		}}
		options={{ type: "yandex#satellite" }}
	>
		{allPlaces.map(places =>
			places.places.map((el, i) =>
				<Placemark
					onClick={() => dispatch(MapSlice.actions.changeCurrentActive(el))}
					key={i}
					geometry={el.coords}
					options={{
						iconLayout: "default#image",
						iconImageHref: activeMark.coords === el.coords ? iconMarkActive : iconMark,
						iconImageSize: [40, 40],
					}}
				/>))}
	</Map>
}
