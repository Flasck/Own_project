import React, {useEffect} from "react";
import styles from "./TeammatePlaces.module.css";
import iconMark from "../../IconMark.svg";
import iconMarkActive from "../../IconMarkActive.svg";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentActiveMark} from "@store/MapSlice/selectors";
import {MapSlice} from "@store/MapSlice";

export const TeammatePlaces = ({data}) => {
    const dispatch = useDispatch()
    const activeMark = useSelector((state) => selectCurrentActiveMark(state))

    useEffect(() => {
    }, [activeMark])

    return (<div className={styles.root}>
        <div className={styles.name}>{data.person}</div>
        <div className={styles.places}>
            {
                data.places.map((v, i) => <div key={i} className={styles.place}>
                    {
                        v.address === activeMark.address
                            ?
                            <img onClick={() => dispatch(MapSlice.actions.changeCurrentActive(v))}
                                 src={iconMarkActive}
                                 alt="activeMark"
                            />
                            :
                            <img onClick={() => dispatch(MapSlice.actions.changeCurrentActive(v))}
                                 src={iconMark}
                                 alt="mark"
                            />
                    }
                    <span className={styles.place}
                          onClick={() => dispatch(MapSlice.actions.changeCurrentActive(v))}
                    >{v.address}</span>
                </div>)
            }
        </div>
    </div>)
}