import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentActiveMark } from "@store/MapSlice/selectors";
import { MapSlice } from "@store/MapSlice";
import styles from "./TeammatePlaces.module.css";

import iconMark from "../../IconMark.svg";
import iconMarkActive from "../../IconMarkActive.svg";


export const TeammatePlaces = ({ data }) =>
{
	const dispatch = useDispatch();
	const activeMark = useSelector(selectCurrentActiveMark);

	return <div>
		<div className={styles.name}>{data.person}</div>
		<div className={styles.places}>
			{
				data.places.map((v, i) =>
					<div key={i} className={styles.place}>
						{
							v.coords === activeMark.coords
								? <img
									onClick={() => dispatch(MapSlice.actions.changeCurrentActive(v))}
									src={iconMarkActive}
									alt="activeMark"
								/>
								: <img
									onClick={() => dispatch(MapSlice.actions.changeCurrentActive(v))}
									src={iconMark}
									alt="mark"
								/>
						}
						<span
							className={styles.place}
							onClick={() => dispatch(MapSlice.actions.changeCurrentActive(v))}
						>
							{v.address}
						</span>
					</div>)
			}
		</div>
	</div>
}
