import React, {useEffect} from "react"
import styles from "./ProjectsPage.module.css"
import {SearchBar} from "@components/SearchBar/SearchBar"
import {ProjectCard} from "@components/ProjectCard/ProjectCard"
import {useDispatch, useSelector} from "react-redux"
import {selectLanguage} from "@store/LanguageSlice/selectors"
import {LoadProjectsIfNotExist} from "@store/ProjectsSlice/LoadProjectsIfNotExist"
import {selectProjects, selectProjectsStatus} from "@store/ProjectsSlice/selectors"
import {Statuses} from "@utils/Statuses"
import {Spinner} from "@components/Spinner/Spinner";

export const ProjectsPage = () => {
    const dispatch = useDispatch();
    const curLan = useSelector(selectLanguage);
    const status = useSelector(selectProjectsStatus)
    useEffect(() => dispatch(LoadProjectsIfNotExist), [curLan]);

    const ProjectsList = useSelector(selectProjects);

    if (status === Statuses.inProgress) {
        return <>
            <SearchBar/>
            <div className={styles.wrapper_spinner}>
                <Spinner/>
            </div>
        </>
    }

    return (
        <>
            <SearchBar/>
            <section className={styles.wrapper}>
                {ProjectsList?.map((project) => <ProjectCard key={project.id} project={project}/>)}
            </section>
        </>
    )
}
