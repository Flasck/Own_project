import React from 'react'
import styles from './Map.module.css'
import map from "./map.png"

export const Map = () =>
	<div className={styles.root}>
		<img className={styles.img} src={map} alt="Map" />
	</div>
