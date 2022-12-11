import React from 'react'
import styles from './TeammatePlaces.module.css'
import iconMark from "../iconMark.svg"

export const TeammatePlaces = ({ data }) =>
	<div className={styles.root}>
		<div className={styles.name}>{data.name}</div>
		<div className={styles.places}>
			{
				data.places.map((v, i) => <div key={i} className={styles.place}>
					<img className={styles.icon} src={iconMark} alt="" />
					<span className={styles.place}>{v}</span>
				</div>)
			}
		</div>
	</div>

