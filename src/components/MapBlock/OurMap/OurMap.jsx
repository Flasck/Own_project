import React from "react"
import styles from "./OurMap.module.css"
import {useDispatch, useSelector} from "react-redux";

import {Map, Placemark} from "@pbe/react-yandex-maps";
import iconMark from "../IconMark.svg"
import iconMarkActive from "../IconMarkActive.svg"

import {selectAllPlaces, selectCurrentActiveMark} from "@store/MapSlice/selectors";
import {MapSlice} from "@store/MapSlice";

export const OurMap = () => {
    const activeMark = useSelector(selectCurrentActiveMark);
    const allPlaces = useSelector(selectAllPlaces);
    const dispatch = useDispatch();

    return <div className={styles.root}>
        <Map
            className={styles.img}
            state={{
                center: activeMark.coords != null
                    ? activeMark.coords : [55.751574, 37.573856],
                zoom: activeMark.coords != null ? 8 : 4,
            }}
            options={{
                type: "yandex#satellite"
            }}
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
                    />
                )
            )}
        </Map>
    </div>
}
