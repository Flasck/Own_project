import React, { useEffect, useState } from "react"
import { SearchBar } from "@components/SearchBar/SearchBar"
import { ProjectCard } from "@components/ProjectCard/ProjectCard"
import { useDispatch, useSelector } from "react-redux"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadProjectsIfNotExist } from "@store/ProjectsSlice/LoadProjectsIfNotExist"
import { selectProjectsStatus } from "@store/ProjectsSlice/selectors"
import { selectConstants } from "@store/ConstantsSlice/selectors"
import { Statuses } from "@utils/Statuses"
import styles from "./ProjectsPage.module.css"
import { ProjectPagePlaceholder } from "./ProjectPagePlaceholder"
import { Button } from "@components/Button/Button"
import { classNames } from "@utils/classNames"

export const ProjectsPage = () =>
{
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	const text = useSelector(selectConstants)
	const status = useSelector(selectProjectsStatus)
	useEffect(() => dispatch(LoadProjectsIfNotExist), [curLan])
	const [projects, setProjects] = useState([])
	const [count, setCount] = useState(window.innerWidth > 700 ? 4 : 2)

	return status === Statuses.inProgress
		? <ProjectPagePlaceholder />
		:		<>
			<SearchBar setProjects={setProjects} />
			<section className={styles.wrapper}>
				{projects.slice(0, count).map(project => (
					<ProjectCard key={`PP${project.id}`} project={project} />
				))}
			</section>
			<div className={classNames(styles.loadMore, count >= projects.length && styles.loadMore_hiden)}>
				<Button
					onClick={() => setCount(v => (window.innerWidth > 700 ? v + 4 : v + 2))}>
					{text?.projectsPage?.showMore}
				</Button>
			</div>
		</>
}
