import React from "react"
import styles from "./PlacesList.module.css"
import { useSelector } from "react-redux";
import { TeammatePlaces } from "./TeammatePlaces/TeammatePlaces"
import { selectAllPlaces } from "@store/MapSlice/selectors";


export const PlacesList = () =>
{
    const allPlaces = useSelector(selectAllPlaces);

    return <div className={styles.root}>
        {
            allPlaces.map((v, i) => <TeammatePlaces key={i} data={v} />)
        }
    </div>
}
