import React from "react"
import { PersonCard } from "./PersonCard/PersonCard"
import SwiperCore, { Autoplay } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/css/navigation"
import styles from "./TeamSlider.module.css"

export const TeamSlider = () => {
	const bd = [
		{
			id: 1,
			name: "Дарья",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nostrum porro, officiis nam reprehenderit accusamus consequuntur iure inventore veritatis quos eius doloribus ea! Illo ab quaerat saepe est architecto. Eveniet.",
		},
		{
			id: 2,
			name: "Михаил",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur ab facilis necessitatibus qui sint repellat accusamus! Assumenda nemo, inventore harum delectus cupiditate quam dolor vitae ut cumque nesciunt sequi?",
		},
		{
			id: 3,
			name: "Николай",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laborum rem labore esse consequuntur nesciunt quae ad molestias. Culpa facilis possimus magni tempore. Minima natus sint delectus porro blanditiis distinctio.",
		},
		{
			id: 4,
			name: "Владислав",
			post: "Web-разработчик",
			techs: "HTML5, CSS3, Javascript, React, Redux-toolkit",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ipsum quisquam alias non itaque error officiis quia tempora ullam. Quas harum sit consectetur doloribus repellendus neque quod dolorem reprehenderit ipsam.",
		},
	]

	SwiperCore.use([Autoplay])

	return (
		<Swiper
			slidesPerView={2}
			centeredSlides={true}
			className={styles.slider}
			spaceBetween={70}
			autoplay={{ delay: 5000 }}
		>
			{bd.map((person) => (
				<SwiperSlide key={person.id}>
					<PersonCard
						key={person.id}
						name={person.name}
						post={person.post}
						techs={person.techs}
						desc={person.desc}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
