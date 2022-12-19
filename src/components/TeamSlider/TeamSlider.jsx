import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { PersonCard } from "./PersonCard/PersonCard"
import { useDispatch, useSelector } from "react-redux"
import styles from "./TeamSlider.module.css"

import { selectPeople } from "@store/PeopleSlice/selectors"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadPeopleIfNotExist } from "@store/PeopleSlice/LoadPeopleIfNotExist"
import { Placeholder } from "../Placeholder/Placeholder"
import { classnames } from "@utils/classnames"

var params = { gap: 0, step: 0, slide: 0, initialOffset: 0, initTouch: 0, lastTouch: 0, threshold: 0 }

export const TeamSlider = () => {
	//Текстовые данные
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	useEffect(() => dispatch(LoadPeopleIfNotExist), [curLan])
	const PeopleList = useSelector(selectPeople)

	// Стейт для ручного рендера
	const [state, setState] = useState(false)

	// Ссылки для присвоения стилей и снятия ширины
	const sliderRef = useRef(null)
	const wrapperRef = useRef(null)
	const cardRef = useRef(null)

	// Функции переключения между слайдами
	const prev_slide = () => {
		if (params.slide > 0) {
			params.slide -= 1
			moveSlide()
			reRender()
		}
	}
	const next_slide = () => {
		if (params.slide < PeopleList.length - 1) {
			params.slide += 1
			moveSlide()
			reRender()
		}
	}
	const select_slide = (slide) => {
		params.slide = slide
		moveSlide()
		reRender()
	}

	// Функции свайпов пальцами
	function touchStart(e) {
		wrapperRef.current.classList.add(styles.grab)
		params.initTouch = e.touches[0].clientX
		params.lastTouch = e.touches[0].clientX
	}
	function touchMove(e) {
		params.lastTouch = e.touches[0].clientX
		moveSlide(params.lastTouch - params.initTouch)
	}
	function touchEnd(e) {
		wrapperRef.current.classList.remove(styles.grab)
		params.lastTouch - params.initTouch > params.threshold ? prev_slide() : moveSlide()
		params.lastTouch - params.initTouch < -params.threshold ? next_slide() : moveSlide()
	}

	// Функции свайпов мышью
	function mouseDown(e) {
		console.log(1)
		wrapperRef.current.classList.add(styles.grab)
		params.initTouch = e.clientX
		params.lastTouch = e.clientX
	}
	function mouseMove(e) {
		if (e.buttons === 1) {
			console.log(2)
			params.lastTouch = e.clientX
			moveSlide(params.lastTouch - params.initTouch)
		}
	}
	function mouseUp(e) {
		wrapperRef.current.classList.remove(styles.grab)
		params.lastTouch - params.initTouch > params.threshold ? prev_slide() : moveSlide()
		params.lastTouch - params.initTouch < -params.threshold ? next_slide() : moveSlide()
	}

	// Функция перерасчета параметров
	const resize = () => {
		if (wrapperRef.current && cardRef.current) {
			params.gap = (wrapperRef.current.offsetWidth - cardRef.current.offsetWidth) / 2 - cardRef.current.offsetWidth / 3
			params.step = cardRef.current.offsetWidth + params.gap
			params.initialOffset = (wrapperRef.current.offsetWidth - cardRef.current.offsetWidth) / 2
			params.threshold = wrapperRef.current.offsetWidth / 10
			moveSlide()
			reRender()
		}
	}

	// Функция сдвига слайдера
	const moveSlide = (move = 0) =>
		(sliderRef.current.style.transform = `translate3d(${params.initialOffset - params.slide * params.step + move}px, 0, 0)`)

	// Функция перерендеринга
	const reRender = () => setState((s) => !s)

	useLayoutEffect(() => {
		if (wrapperRef.current && cardRef.current) {
			// Получаем изначальные измерения
			resize()

			// Слушатели нажатий
			wrapperRef.current.addEventListener("touchstart", touchStart)
			wrapperRef.current.addEventListener("touchmove", touchMove)
			wrapperRef.current.addEventListener("touchend", touchEnd)

			// Слушатели кликов
			wrapperRef.current.addEventListener("mousedown", mouseDown)
			wrapperRef.current.addEventListener("mousemove", mouseMove)
			window.addEventListener("mouseup", mouseUp)

			// Слушатель изменений окна
			window.addEventListener("resize", resize)

			// Навигация по клавишам
			document.addEventListener("keyup", (e) => {
				e.which == 37 ? prev_slide() : null
				e.which == 39 ? next_slide() : null
			})
		}
	}, [PeopleList])

	return (
		<>
			{PeopleList ? (
				<div className={styles.slider}>
					<div className={styles.slider_overflow} ref={wrapperRef}>
						<div className={styles.slides_line} style={{ gap: `${params.gap}px` }} ref={sliderRef}>
							{PeopleList.map((person) => (
								<PersonCard key={person.id} person={person} refLink={cardRef} />
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
								onClick={() => select_slide(index)}
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
