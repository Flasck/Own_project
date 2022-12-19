import React, { useLayoutEffect, useEffect, useRef, useState } from "react"
import { PersonCard } from "./PersonCard/PersonCard"
import { useDispatch, useSelector } from "react-redux"
import styles from "./TeamSlider.module.css"

import { selectPeople } from "@store/PeopleSlice/selectors"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadPeopleIfNotExist } from "@store/PeopleSlice/LoadPeopleIfNotExist"
import { Placeholder } from "../Placeholder/Placeholder"
import { classnames } from "@utils/classnames"

var params = { gap: 0, step: 0, slide: 0, initialOffset: 0, offset: 0, initTouch: 0, lastTouch: 0, threshold: 0 }

export const TeamSlider = () => {
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	useEffect(() => dispatch(LoadPeopleIfNotExist), [curLan])
	const PeopleList = useSelector(selectPeople)

	const sliderContent = useRef();

	const [moved, setMoved] = useState(false)

	// Ссылки для снятия ширины
	const wrapperRefWidth = useRef(null)
	const cardRefWidth = useRef(null)

	// Функции переключения между слайдами
	const prev_slide = () =>
	{
		if (params.slide > 0)
		{
			params.slide -= 1
			setMoved(v => !v)
		}
	}
	const next_slide = () =>
	{
		if (params.slide < PeopleList.length - 1)
		{
			params.slide += 1
			setMoved(v => !v)
			console.log("next_slide");
		}
	}

	// Функции свайпов пальцами
	function touchStart(e)
	{
		wrapperRefWidth.current.classList.add(styles.grab);
		params.initTouch = e.touches[0].clientX
		params.lastTouch = e.touches[0].clientX
	}
	function touchMove(e)
	{
		params.lastTouch = e.touches[0].clientX
		moveSlider(params.lastTouch - params.initTouch)
	}
	function touchEnd(e)
	{
		wrapperRefWidth.current.classList.remove(styles.grab);
		params.lastTouch - params.initTouch > params.threshold ? prev_slide() : moveSlider()
		params.lastTouch - params.initTouch < -params.threshold ? next_slide() : moveSlider()
	}

	function mouseDown(e)
	{
		wrapperRefWidth.current.classList.add(styles.grab);
		params.initTouch = e.clientX;
		params.lastTouch = e.clientX;
	}

	function mouseMove(e)
	{
		if (e.buttons === 1) {
			params.lastTouch = e.clientX
			moveSlider(params.lastTouch - params.initTouch)
		}
	}

	function mouseUp(e)
	{
		wrapperRefWidth.current.classList.remove(styles.grab);
		params.lastTouch - params.initTouch > params.threshold ? prev_slide() : setTimeout(moveSlider, 1);
		params.lastTouch - params.initTouch < -params.threshold ? next_slide() : setTimeout(moveSlider, 1);
	}


	// Функция перерасчета параметров
	const resize = () => {
		if (wrapperRefWidth.current && cardRefWidth.current) {
			params.gap = (wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2 - cardRefWidth.current.offsetWidth / 3
			params.step = cardRefWidth.current.offsetWidth + params.gap
			params.initialOffset = (wrapperRefWidth.current.offsetWidth - cardRefWidth.current.offsetWidth) / 2
			params.threshold = wrapperRefWidth.current.offsetWidth / 7
			sliderContent.current.style.gap = `${params.gap}px`;
			moveSlider()
		}
	}

	// Функция перерендеринга
	const moveSlider = (moved = 0) =>
	{
		params.offset = params.initialOffset - params.slide * params.step + moved
		if (sliderContent.current)
			sliderContent.current.style.transform = `translate3d(${params.offset}px, 0, 0)`;
	}


	useLayoutEffect(() => {
		if (wrapperRefWidth.current && cardRefWidth.current) {
			// Получаем изначальные измерения
			resize()

			// Слушатели нажатий
			wrapperRefWidth.current.addEventListener("touchstart", touchStart)
			wrapperRefWidth.current.addEventListener("touchmove", touchMove)
			wrapperRefWidth.current.addEventListener("touchend", touchEnd)

			// Слушатели кликов
			wrapperRefWidth.current.addEventListener("mousedown", mouseDown)
			wrapperRefWidth.current.addEventListener("mousemove", mouseMove)
			wrapperRefWidth.current.addEventListener("mouseup", mouseUp)

			// Слушатель изменений окна
			window.addEventListener("resize", resize)

			// Навигация по клавишам
			document.addEventListener("keyup", () =>
			{
				var e = e || window.event
				e.which == 37 ? prev_slide() : null
				e.which == 39 ? next_slide() : null
			});
		}
	}, [PeopleList])

	setTimeout(moveSlider, 1);
	console.log(params.offset);
	return (
		<>
			{PeopleList ? (
				<div className={styles.slider}>
					<div className={styles.slider_overflow} ref={wrapperRefWidth}>
						<div
							className={classnames(styles.slides_line, moved ? styles.slider_moved : "")}
							style={{ gap: `${params.gap}px`, left: `translate3d(${params.offset}px, 0, 0)` }}
							ref={sliderContent}
						>
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
									moveSlider()
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
