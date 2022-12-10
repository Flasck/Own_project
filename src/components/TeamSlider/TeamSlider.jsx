import React from "react"
import styles from "./TeamSlider.module.css"
import { PersonCard } from "./PersonCard/PersonCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export const TeamSlider = () => {
	const bd = {
		1: {
			id: 1,
			name: "Дарья",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum porro, officiis nam reprehenderit accusamus consequuntur iure inventore veritatis quos eius doloribus ea! Illo ab quaerat saepe est architecto. Eveniet.",
		},
		2: {
			id: 2,
			name: "Михаил",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur ab facilis necessitatibus qui sint repellat accusamus! Assumenda nemo, inventore harum delectus cupiditate quam dolor vitae ut cumque nesciunt sequi?",
		},
		3: {
			id: 3,
			name: "Николай",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum rem labore esse consequuntur nesciunt quae ad molestias. Culpa facilis possimus magni tempore. Minima natus sint delectus porro blanditiis distinctio.",
		},
		4: {
			id: 4,
			name: "Владислав",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum quisquam alias non itaque error officiis quia tempora ullam. Quas harum sit consectetur doloribus repellendus neque quod dolorem reprehenderit ipsam.",
		},
	}

	return (
		// <Swiper spaceBetween={20} navigation={true} grabCursor={true} modules={[Navigation, Thumbs]}>
		// 	<SwiperSlide key={bd[1].id}>
		// 		{/* <PersonCard key={bd[1].id} name={bd[1].name} post={bd[1].post} techs={bd[1].techs} desc={bd[1].desc} /> */}
		// 		<h1>1</h1>
		// 	</SwiperSlide>
		// 	<SwiperSlide key={bd[2].id}>
		// 		{/* <PersonCard key={bd[1].id} name={bd[2].name} post={bd[2].post} techs={bd[2].techs} desc={bd[2].desc} /> */}
		// 		<h1>2</h1>
		// 	</SwiperSlide>
		// 	<SwiperSlide key={bd[3].id}>
		// 		{/* <PersonCard key={bd[1].id} name={bd[3].name} post={bd[3].post} techs={bd[3].techs} desc={bd[3].desc} /> */}
		// 		<h1>3</h1>
		// 	</SwiperSlide>
		// 	<SwiperSlide key={bd[4].id}>
		// 		{/* <PersonCard key={bd[1].id} name={bd[4].name} post={bd[4].post} techs={bd[4].techs} desc={bd[4].desc} /> */}
		// 		<h1>4</h1>
		// 	</SwiperSlide>
		// </Swiper>

		<Swiper spaceBetween={20} navigation={true} modules={[Navigation, Thumbs]} grabCursor={true}>
			<SwiperSlide key="1">
				<h1>1</h1>
			</SwiperSlide>
			<SwiperSlide key="2">
				<h1>2</h1>
			</SwiperSlide>
			<SwiperSlide key="3">
				<h1>3</h1>
			</SwiperSlide>
			<SwiperSlide key="4">
				<h1>4</h1>
			</SwiperSlide>
			<SwiperSlide key="5">
				<h1>5</h1>
			</SwiperSlide>
		</Swiper>
	)
}
