import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { PersonCard } from "./PersonCard/PersonCard"
import { useDispatch, useSelector } from "react-redux"
import styles from "./TeamSlider.module.css"

import { selectPeople } from "@store/PeopleSlice/selectors"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadPeopleIfNotExist } from "@store/PeopleSlice/LoadPeopleIfNotExist"

export const TeamSlider = () => {
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	useEffect(() => dispatch(LoadPeopleIfNotExist), [curLan])
	const PeopleList = useSelector(selectPeople)

	// Ссылки для снятия ширины
	const wrapperRefWidth = useRef(null)
	const cardRefWidth = useRef(null)

	// Состояния для всех измерений
	const [gap, setGap] = useState(0)
	const [step, setStep] = useState(0)
	const [slide, setSlide] = useState(0)
	const [offset, setOffset] = useState(0)

	// Функции переключения между слайдами
	const prev_slide = () => {
		if (slide > 0) {
			setSlide((state) => state - 1)
			setOffset((state) => state + step)
		}
	}
	const next_slide = () => {
		if (slide < PeopleList.length - 1) {
			setSlide((state) => state + 1)
			setOffset((state) => state - step)
		}
	}

	// Получаем изначальные измерения
	useLayoutEffect(() => {
		if (wrapperRefWidth.current && cardRefWidth.current) {
			setGap(
				(wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 4 -
					cardRefWidth.current.offsetWidth / 6
			)
			setStep(
				(cardRefWidth.current.offsetWidth * 2) / 3 +
					(wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2
			)
			setOffset((wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2)
			setSlide(0)
		}
	}, [PeopleList])

	// Следим за изменениями
	window.addEventListener("resize", () => {
		if (wrapperRefWidth.current && cardRefWidth.current) {
			setGap(
				(wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 4 -
					cardRefWidth.current.offsetWidth / 6
			)
			setStep(
				(cardRefWidth.current.offsetWidth * 2) / 3 +
					(wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2
			)
			setOffset((wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2)
			setSlide(0)
			console.log("Resized") // Заходит сюда 3 раза
		}
	})

	return (
		<>
			{PeopleList ? (
				<div className={styles.slider}>
					<div className={styles.slider_overflow} ref={wrapperRefWidth}>
						<div className={styles.slides_line} style={{ margin: `0 ${-gap}px`, left: `${offset}px` }}>
							{PeopleList.map((person) => (
								<PersonCard key={person.id} gap={gap} person={person} refLink={cardRefWidth} />
							))}
						</div>
					</div>
					<div className={styles.btn_prev} onClick={prev_slide}>
						←
					</div>
					<div className={styles.btn_next} onClick={next_slide}>
						→
					</div>
				</div>
			) : (
				<div className={styles.err}>Downloading files...</div>
			)}
		</>
	)
}
