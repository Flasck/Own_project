import React from "react"
import { SearchBar } from "../../components/SearchBar/SearchBar"
import styles from "./ProjectsPage.module.css"
import { CardCase } from "../../components/CardCase/CardCase"


export const ProjectsPage = () => {
	const db = [
		{
			id: "123",
			time: "12:06 11/11/2021",
			name: "Unnamed project №1",
			authors: "Иван Иванов",
			for: "Личный проект",
			desc: "Lorem ipsum dolor tas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
			techs: ["HTML", "CSS", "React", "Redux"],
		},
		{
			id: "456",
			time: "12:06 11/11/2021",
			name: "Unnamed project №1",
			authors: "Иван Иванов, Сергей Бобров",
			for: "Личный проект",
			desc: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
			techs: ["HTML", "CSS", "React", "Redux"],
		},
		{
			id: "789",
			time: "12:06 11/11/2021",
			name: "Unnamed project №1",
			authors: "Иван Иванов, Сергей Бобров",
			for: "Личный проект",
			desc: "Lorem Tempore voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
			techs: ["HTML", "CSS", "React", "Redux"],
		},
		{
			id: "711",
			time: "12:06 11/11/2021",
			name: "Unnamed project №1",
			authors: "Иван Иванов, Сергей Бобров",
			for: "Личный проект",
			desc: "Lorem Tempore voluptas enim aliquam veritatis to placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
			techs: ["HTML", "CSS", "React", "Redux"],
		},
		{
			id: "7229",
			time: "12:06 11/11/2021",
			name: "Unnamed project №1",
			authors: "Иван Иванов, Сергей Бобров",
			for: "Личный проект",
			desc: "Lorem Teto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
			techs: ["HTML", "CSS", "React", "Redux"],
		},
	]
	return (
		<>
			<SearchBar />
			<article className={styles.wrapper}>
				{db.map((c) => (
					<CardCase key={c.id} arr={c} />
				))}
			</article>
		</>
	)
}

