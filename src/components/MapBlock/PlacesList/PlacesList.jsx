import React from "react"
import { useSelector } from "react-redux";
import { selectAllPlaces } from "@store/MapSlice/selectors";
import styles from "./PlacesList.module.css"
import { TeammatePlaces } from "./TeammatePlaces/TeammatePlaces"

export const PlacesList = () =>
{
	const allPlaces = useSelector(selectAllPlaces);

	return <div className={styles.root}>
		{
			allPlaces.map(v => <TeammatePlaces key={v.person} data={v} />)
		}
	</div>
}
