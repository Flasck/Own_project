import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectPeople } from "@store/PeopleSlice/selectors"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadPeopleIfNotExist } from "@store/PeopleSlice/LoadPeopleIfNotExist"
import { classNames } from "@utils/classNames"
import { Placeholder } from "../Placeholder/Placeholder"
import styles from "./TeamSlider.module.css"
import { PersonCard } from "./PersonCard/PersonCard"


const params = { gap: 0, step: 0, slide: 0, initialOffset: 0, initTouch: 0, lastTouch: 0, threshold: 0 }

export const TeamSlider = () =>
{
	// Текстовые данные
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	useEffect(() => dispatch(LoadPeopleIfNotExist), [curLan])
	const PeopleList = useSelector(selectPeople)

	// Стейт для ручного рендера
	const [_, setState] = useState(false)

	// Ссылки для присвоения стилей и снятия ширины
	const sliderRef = useRef(null)
	const wrapperRef = useRef(null)
	const cardRef = useRef(null)

	// Функции переключения между слайдами
	const toPrevSlide = () =>
	{
		if (params.slide > 0)
		{
			params.slide -= 1
			moveSlide()
			reRender()
		}
	}
	const toNextSlide = () =>
	{
		if (params.slide < PeopleList.length - 1)
		{
			params.slide += 1
			moveSlide()
			reRender()
		}
	}
	const select_slide = (slide) =>
	{
		params.slide = slide
		moveSlide()
		reRender()
	}

	// Функции свайпов пальцами
	function touchStart(e)
	{
		if (wrapperRef.current)
			wrapperRef.current.classList.add(styles.grab)
		params.initTouch = e.touches[0].clientX
		params.lastTouch = e.touches[0].clientX
	}
	function touchMove(e)
	{
		params.lastTouch = e.touches[0].clientX
		moveSlide(params.lastTouch - params.initTouch)
	}
	function touchEnd()
	{
		if (wrapperRef.current)
			wrapperRef.current.classList.remove(styles.grab)
		params.lastTouch - params.initTouch > params.threshold ? toPrevSlide() : moveSlide();
		params.lastTouch - params.initTouch < -params.threshold ? toNextSlide() : moveSlide();
	}

	// Функции свайпов мышью
	function mouseDown(e)
	{
		if (wrapperRef.current)
			wrapperRef.current.classList.add(styles.grab)
		params.initTouch = e.clientX
		params.lastTouch = e.clientX
	}
	function mouseMove(e)
	{
		if (e.buttons === 1)
		{
			params.lastTouch = e.clientX
			moveSlide(params.lastTouch - params.initTouch)
		}
	}

	function mouseUp(e) {
		wrapperRef.current.classList.remove(styles.grab)
		params.lastTouch - params.initTouch > params.threshold ? prev_slide() : moveSlide()
		params.lastTouch - params.initTouch < -params.threshold ? next_slide() : moveSlide()
		params.initTouch = 0
		params.lastTouch = 0
	}

	// Функция перерасчета параметров
	const resize = () => {
		if (wrapperRef.current && cardRef.current) {
			params.gap =
				(wrapperRef.current.offsetWidth - cardRef.current.offsetWidth) / 2 - cardRef.current.offsetWidth / 4 < 50
					? 100
					: (wrapperRef.current.offsetWidth - cardRef.current.offsetWidth) / 2 - cardRef.current.offsetWidth / 4

			params.step = cardRef.current.offsetWidth + params.gap
			params.initialOffset = (wrapperRef.current.offsetWidth - cardRef.current.offsetWidth) / 2
			params.threshold = wrapperRef.current.offsetWidth / 8
			moveSlide()
			reRender()
		}
	}

	// Функция сдвига слайдера
	const moveSlide = (move = 0) =>
	{
		if (sliderRef.current)
			sliderRef.current.style.transform = `translate3d(${params.initialOffset - params.slide * params.step + move}px, 0, 0)`;
	}

	// Функция перерендеринга
	const reRender = () => setState(s => !s)

	useLayoutEffect(() =>
	{
		if (wrapperRef.current && cardRef.current)
		{
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
			document.addEventListener("keyup", (e) =>
			{
				if (e.key === "ArrowLeft") toPrevSlide();
				if (e.key === "ArrowRight") toNextSlide();
			})
		}
	}, [PeopleList])

	return <>
		{PeopleList ? (
			<div className={styles.slider}>
				<div className={styles.slider_overflow} ref={wrapperRef}>
					<div className={styles.slides_line} style={{ gap: `${params.gap}px` }} ref={sliderRef}>
						{PeopleList.map((person) => (
							<PersonCard key={person.id} person={person} refLink={cardRef} />
						))}
					</div>
				</div>
				<div className={classNames(styles.blur, styles.blur_left)} />
				<div className={classNames(styles.blur, styles.blur_right)} />
				<div className={classNames(styles.btn_prev, params.slide === 0 ? styles.btn_prev_dis : "")} onClick={toPrevSlide}>
					❮
				</div>
				<div
					className={classNames(styles.btn_next, params.slide === PeopleList.length - 1 ? styles.btn_next_dis : "")}
					onClick={toNextSlide}
				>
					❯
				</div>
				<div className={styles.dots}>
					{PeopleList.map((_, index) => (
						<div
							key={Math.random() * index}
							className={classNames(styles.dot, params.slide === index ? styles.dot_active : "")}
							onClick={() => select_slide(index)}
						/>
					))}
				</div>
			</div>
		) : (
			<Placeholder height={326} unitH="px" disableText />
		)}
	</>
}
