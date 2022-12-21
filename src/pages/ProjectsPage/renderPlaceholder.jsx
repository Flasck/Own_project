import React from "react"
import { ProjectCardPlaceholder } from "@components/ProjectCard/ProjectCard"
import { SearchBar } from "@components/SearchBar/SearchBar"

export const renderPlaceholder = (styles) => (
	<>
		<SearchBar setProjects={() => {}} />
		<section className={styles}>
			<ProjectCardPlaceholder />
			<ProjectCardPlaceholder />
		</section>
	</>
)
