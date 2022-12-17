import React, { useEffect, useState } from "react"
import styles from "./ProjectsPage.module.css"
import { SearchBar } from "@components/SearchBar/SearchBar"
import { ProjectCard } from "@components/ProjectCard/ProjectCard"
import { useDispatch, useSelector } from "react-redux"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { LoadProjectsIfNotExist } from "@store/ProjectsSlice/LoadProjectsIfNotExist"
import { selectProjects, selectProjectsStatus } from "@store/ProjectsSlice/selectors"
import { Statuses } from "@utils/Statuses"
import { Spinner } from "@components/Spinner/Spinner";
import { useIntersectionObserver } from "@utils/useIntersectionObserver"


export const ProjectsPage = () =>
{
	const dispatch = useDispatch();
	const curLan = useSelector(selectLanguage);
	const status = useSelector(selectProjectsStatus)
	useEffect(() => dispatch(LoadProjectsIfNotExist), [curLan]);
	const projectsList = useSelector(selectProjects) || [];

	const [count, setCount] = useState(window.innerWidth > 700 ? 4 : 2);
	const cbRef = useIntersectionObserver({ threshold: 1 }, (entries) =>
	{
		for (let i = 0; i < entries.length; i++)
		{
			const entry = entries[i];
			if (entry.isIntersecting)
			{
				setCount(v => window.innerWidth > 700 ? v + 2 : v + 1);
				break
			}
		}
	})


	if (status === Statuses.inProgress)
		return renderPlaceholder();


	return <>
		<SearchBar />
		<section className={styles.wrapper}>
			{projectsList.slice(0, count).map((project) => <ProjectCard key={project.id} project={project} />)}
			<div ref={cbRef} className={styles.endOfList}></div>
		</section>
	</>
}


const renderPlaceholder = () => <>
	<SearchBar />
	<div className={styles.wrapper_spinner}>
		<Spinner />
	</div>
</>
