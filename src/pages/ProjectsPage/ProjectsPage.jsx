import React, {useEffect} from "react"
import styles from "./ProjectsPage.module.css"
import {SearchBar} from "@components/SearchBar/SearchBar"
import {ProjectCard} from "@components/ProjectCard/ProjectCard"
import {useDispatch, useSelector} from "react-redux"
import {selectLanguage} from "@store/LanguageSlice/selectors"
import {LoadProjectsIfNotExist} from "@store/ProjectsSlice/LoadProjectsIfNotExist"
import {selectProjects, selectProjectsStatus} from "@store/ProjectsSlice/selectors"
import {Statuses} from "@utils/Statuses"

export const ProjectsPage = () => {
    const dispatch = useDispatch();
    const curLan = useSelector(selectLanguage);
    const status = useSelector(selectProjectsStatus)
    useEffect(() => dispatch(LoadProjectsIfNotExist), [curLan]);

    const ProjectsList = useSelector(selectProjects);

    if (status === Statuses.inProgress) {
        return spinner()
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

const spinner = () => {
    return <>
        <SearchBar/>
        <div className={styles.wrapper_spinner}>
            <svg className={styles.loadingIcon}
                 xmlns="http://www.w3.org/2000/svg" height="48" width="48">
                <path
                    className={styles.loadingIcon__path}
                    d="M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z"
                />
            </svg>
        </div>
    </>
}

// const db = [
// 	{
// 		id: "1",
// 		title: "Unnamed project №1",
// 		date: "12:06 11/11/2021",
//         imageId: null,
// 		description: "Lorem ipsum dolor tas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
// 		type: "Личный проект",
// 		authors: ["Иван Иванов"],
// 		technologies: ["HTML", "CSS", "React", "Redux"],
// 	},
// 	{
// 		id: "2",
// 		title: "Unnamed project №1",
// 		date: "12:06 11/11/2021",
//         imageId: null,
// 		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
// 		type: "Личный проект",
// 		authors: ["Иван Иванов", "Сергей Бобров"],
// 		technologies: ["HTML", "CSS", "React", "Redux"],
// 	},
// 	{
// 		id: "3",
// 		title: "Unnamed project №1",
// 		date: "12:06 11/11/2021",
//         imageId: null,
// 		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
// 		type: "Личный проект",
// 		authors: ["Иван Иванов", "Сергей Бобров"],
// 		technologies: ["HTML", "CSS", "React", "Redux"],
// 	},
// 	{
// 		id: "4",
// 		title: "Unnamed project №1",
// 		date: "12:06 11/11/2021",
//         imageId: null,
// 		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
// 		type: "Личный проект",
// 		authors: ["Иван Иванов", "Сергей Бобров"],
// 		technologies: ["HTML", "CSS", "React", "Redux"],
// 	},
// 	{
// 		id: "5",
// 		title: "Unnamed project №1",
// 		date: "12:06 11/11/2021",
//         imageId: null,
// 		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
// 		type: "Личный проект",
// 		authors: ["Иван Иванов", "Сергей Бобров"],
// 		technologies: ["HTML", "CSS", "React", "Redux"],
// 	},
// 	{
// 		id: "6",
// 		title: "Unnamed project №1",
// 		date: "12:06 11/11/2021",
//         imageId: null,
// 		description: "Lorem ipsum dolor sre voluptas enim aliquam veritatis corrupti iusto placeat, repellendus fugit, explicabo ut est? Cum, a, inventore porro, neque eum maiores exercitationem eligendi modi dolorum officiis veritatis deleniti necessitatibus ipsum debitis veniam. A.",
// 		type: "Личный проект",
// 		authors: ["Иван Иванов", "Сергей Бобров"],
// 		technologies: ["HTML", "CSS", "React", "Redux"],
// 	},
// ]