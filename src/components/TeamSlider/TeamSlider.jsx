import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { PersonCard } from "./PersonCard/PersonCard"
import { useDispatch, useSelector } from "react-redux"
import styles from "./TeamSlider.module.css"

import { selectPeople } from "@store/PeopleSlice/selectors"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadPeopleIfNotExist } from "@store/PeopleSlice/LoadPeopleIfNotExist"
import { Placeholder } from "../Placeholder/Placeholder"
import { classnames } from "../../utils/classnames"

var params = { gap: 0, step: 0, slide: 0, initialOffset: 0, initTouch: 0, lastTouch: 0, threshold: 0 }

export const TeamSlider = () => {
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	useEffect(() => dispatch(LoadPeopleIfNotExist), [curLan])
	const PeopleList = useSelector(selectPeople)

	// Состояние сдвига для рендера
	const [offset, setOffset] = useState(0)

	// Ссылки для снятия ширины
	const wrapperRefWidth = useRef(null)
	const cardRefWidth = useRef(null)

	// Функции переключения между слайдами
	const prev_slide = () => {
		if (params.slide > 0) {
			params.slide -= 1
			reRender()
		}
	}
	const next_slide = () => {
		if (params.slide < PeopleList.length - 1) {
			params.slide += 1
			reRender()
		}
	}
	// Функции свайпов
	const touchStart = (event) => {
		params.initTouch = event.touches[0].clientX
		params.lastTouch = event.touches[0].clientX
	}

	const touchMove = (event) => {
		params.lastTouch = event.touches[0].clientX
	}

	const endTouch = (event) => {
		params.lastTouch - params.initTouch > params.threshold ? prev_slide() : null
		params.lastTouch - params.initTouch < -params.threshold ? next_slide() : null
	}

	// Функция перерасчета параметров
	const resize = () => {
		if (wrapperRefWidth.current && cardRefWidth.current) {
			params.gap = (wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2 - cardRefWidth.current.offsetWidth / 3
			params.step = cardRefWidth.current.offsetWidth + params.gap
			params.initialOffset = (wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2
			params.threshold = wrapperRefWidth.current.offsetWidth / 10
			reRender()
		}
	}

	// Функция перерендеринга
	const reRender = () => setOffset(params.initialOffset - params.slide * params.step)

	useLayoutEffect(() => {
		if (wrapperRefWidth.current && cardRefWidth.current) {
			// Получаем изначальные измерения
			resize()

			// Слушатели нажатий
			document.getElementById("slider").addEventListener("touchstart", touchStart)
			document.getElementById("slider").addEventListener("touchmove", touchMove)
			document.getElementById("slider").addEventListener("touchend", endTouch)

			// Слушатели кликов
			document.getElementById("slider").addEventListener("mousedown", touchStart)
			document.getElementById("slider").addEventListener("mousemove", touchMove)
			document.getElementById("slider").addEventListener("mouseup", endTouch)

			// Слушатель изменений окна
			window.addEventListener("resize", resize)

			// Навигация по клавишам
			document.onkeyup = () => {
				var e = e || window.event
				e.which == 37 ? prev_slide() : null
				e.which == 39 ? next_slide() : null
			}
		}
	}, [PeopleList])

	return (
		<>
			{PeopleList ? (
				<div className={styles.slider} id="slider">
					<div className={styles.slider_overflow} ref={wrapperRefWidth}>
						<div className={styles.slides_line} style={{ gap: `${params.gap}px`, transform: `translate3d(${offset}px, 0, 0)` }}>
							{PeopleList.map((person) => (
								<PersonCard key={person.id} person={person} refLink={cardRefWidth} />
							))}
						</div>
					</div>
					<div className={classnames(styles.btn_prev, params.slide == 0 ? styles.btn_prev_dis : "")} onClick={prev_slide}>
						❮
					</div>
					<div
						className={classnames(styles.btn_next, params.slide == PeopleList.length - 1 ? styles.btn_next_dis : "")}
						onClick={next_slide}
					>
						❯
					</div>
					<div className={styles.dots}>
						{PeopleList.map((el, index) => (
							<div
								key={Math.random() * index}
								className={classnames(styles.dot, params.slide == index ? styles.dot_active : "")}
								onClick={() => {
									params.slide = index
									reRender()
								}}
							></div>
						))}
					</div>
				</div>
			) : (
				<Placeholder height={326} unitH="px" disableText={true} />
			)}
		</>
	)
}
