import React from "react"
import styles from "./PlacesList.module.css"
import {TeammatePlaces} from "./TeammatePlaces/TeammatePlaces"
import {useSelector} from "react-redux";
import {selectAllPlaces} from "@store/MapSlice/selectors";

export const PlacesList = () => {
    const allPlaces = useSelector((state) => selectAllPlaces(state))

    return <div className={styles.root}>
        {
            allPlaces.map((v, i) => <TeammatePlaces key={i} data={v}/>)
        }
    </div>
}

