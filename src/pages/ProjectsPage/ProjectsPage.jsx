import React, { useEffect, useState } from "react"
import { SearchBar } from "@components/SearchBar/SearchBar"
import { ProjectCard } from "@components/ProjectCard/ProjectCard"
import { useDispatch, useSelector } from "react-redux"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadProjectsIfNotExist } from "@store/ProjectsSlice/LoadProjectsIfNotExist"
import { selectProjectsStatus } from "@store/ProjectsSlice/selectors"
import { Statuses } from "@utils/Statuses"
import { useIntersectionObserver } from "@utils/useIntersectionObserver"
import styles from "./ProjectsPage.module.css"
import { renderPlaceholder } from "./renderPlaceholder"

export const ProjectsPage = () => {
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	const status = useSelector(selectProjectsStatus)
	useEffect(() => dispatch(LoadProjectsIfNotExist), [curLan])
	const [projects, setProjects] = useState([])

	const [count, setCount] = useState(window.innerWidth > 700 ? 4 : 2)
	const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) => {
		for (let i = 0; i < entries.length; i++) {
			const entry = entries[i]
			if (entry.isIntersecting) {
				setCount((v) => (window.innerWidth > 700 ? v + 2 : v + 1))
				break
			}
		}
	})

	if (status === Statuses.inProgress) return renderPlaceholder(styles.wrapper)

	return (
		<>
			<SearchBar setProjects={setProjects} />
			<section className={styles.wrapper}>
				{projects.slice(0, count).map((project) => (
					<ProjectCard key={"PP" + project.id} project={project} />
				))}
				<div ref={cbRef} className={styles.endOfList} />
			</section>
		</>
	)
}
