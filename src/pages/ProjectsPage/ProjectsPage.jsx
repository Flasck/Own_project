import React from "react"
import styles from "./ProjectsPage.module.css"
import { SearchBar } from "@components/SearchBar/SearchBar"
import { ProjectCard } from "@components/ProjectCard/ProjectCard"


export const ProjectsPage = () =>
{
	return <>
		<SearchBar />
		<section className={styles.wrapper}>
			{db.map(data => <ProjectCard key={data.id} data={data} />)}
		</section>
	</>
}

const db = [
	{
		id: "1",
		title: "Unnamed project №1",
		date: "12:06 11/11/2021",
        imageId: null,
		description: "Lorem ipsum dolor tas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
		type: "Личный проект",
		authors: ["Иван Иванов"],
		technologies: ["HTML", "CSS", "React", "Redux"],
	},
	{
		id: "2",
		title: "Unnamed project №1",
		date: "12:06 11/11/2021",
        imageId: null,
		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
		type: "Личный проект",
		authors: ["Иван Иванов", "Сергей Бобров"],
		technologies: ["HTML", "CSS", "React", "Redux"],
	},
	{
		id: "3",
		title: "Unnamed project №1",
		date: "12:06 11/11/2021",
        imageId: null,
		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
		type: "Личный проект",
		authors: ["Иван Иванов", "Сергей Бобров"],
		technologies: ["HTML", "CSS", "React", "Redux"],
	},
	{
		id: "4",
		title: "Unnamed project №1",
		date: "12:06 11/11/2021",
        imageId: null,
		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
		type: "Личный проект",
		authors: ["Иван Иванов", "Сергей Бобров"],
		technologies: ["HTML", "CSS", "React", "Redux"],
	},
	{
		id: "5",
		title: "Unnamed project №1",
		date: "12:06 11/11/2021",
        imageId: null,
		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
		type: "Личный проект",
		authors: ["Иван Иванов", "Сергей Бобров"],
		technologies: ["HTML", "CSS", "React", "Redux"],
	},
	{
		id: "6",
		title: "Unnamed project №1",
		date: "12:06 11/11/2021",
        imageId: null,
		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
		type: "Личный проект",
		authors: ["Иван Иванов", "Сергей Бобров"],
		technologies: ["HTML", "CSS", "React", "Redux"],
	},
]