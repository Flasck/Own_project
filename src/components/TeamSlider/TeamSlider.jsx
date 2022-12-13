import React, { useEffect } from "react"
import { PersonCard } from "./PersonCard/PersonCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import styles from "./TeamSlider.module.css"
import { useDispatch, useSelector } from "react-redux"
import { selectPeople } from "../../store/PeopleSlice/selectors"
import { selectLanguage } from "../../store/LanguageSlice/selectors"
import { LoadPeopleIfNotExist } from "../../store/PeopleSlice/LoadPeopleIfNotExist"

export const TeamSlider = () => {
	const dispatch = useDispatch()
	const curLan = useSelector((state) => selectLanguage(state))
	useEffect(() => dispatch(LoadPeopleIfNotExist()), [curLan])

	const PeopleList = useSelector((state) => selectPeople(state))

	return (
		<Swiper slidesPerView={2} centeredSlides={true} className={styles.slider} spaceBetween={70}>
			{PeopleList?.map((person) => (
				<SwiperSlide key={person.id}>
					<PersonCard key={person.id + 100} person={person} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}
