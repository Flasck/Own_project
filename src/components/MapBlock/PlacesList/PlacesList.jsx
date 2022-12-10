import React from 'react'
import styles from './PlacesList.module.css'
import { TeammatePlaces } from './TeammatePlaces/TeammatePlaces'

export const PlacesList = () =>
	<div className={styles.root}>
		{
			data.map((v, i) => <TeammatePlaces key={i} data={v} />)
		}
	</div>


const data = [
	{
		name: "Петр Иванов",
		places: [
			"г. Москва, Ленинский пр-т, 10",
			"г. Москва, ул. Большая Пушкинская, стр. 10",
		]
	},
	{
		name: "Иван Петров",
		places: [
			"г. Санкт-Петербург, ул. Большая Пушкинская, стр. 24",
			"г. Казань, Ленинский пр-т, 10",
		]
	},
	{
		name: "Иван Петров",
		places: [
			"г. Санкт-Петербург, ул. Большая Пушкинская, стр. 24",
			"г. Казань, Ленинский пр-т, 10",
		]
	},
	{
		name: "Иван Петров",
		places: [
			"г. Санкт-Петербург, ул. Большая Пушкинская, стр. 24",
			"г. Казань, Ленинский пр-т, 10",
		]
	},
]