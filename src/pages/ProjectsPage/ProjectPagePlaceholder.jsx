import React from "react"
import { ProjectCardPlaceholder } from "@components/ProjectCard/ProjectCardPlaceholder"
import { SearchBar } from "@components/SearchBar/SearchBar"
import styles from "./ProjectsPage.module.css"

export const ProjectPagePlaceholder = () =>
	<>
		<SearchBar setProjects={() => {}} />
		<section className={styles.wrapper}>
			<ProjectCardPlaceholder />
			<ProjectCardPlaceholder />
		</section>
	</>
