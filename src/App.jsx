import "./App.module.css"
import "./fonts.module.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

import { MainPage } from "@pages/MainPage/MainPage"
import { ProjectsPage } from "@pages/ProjectsPage/ProjectsPage"
import { CommentsPage } from "@pages/CommentsPage/CommentsPage"
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage"
import { PersonalDataPage } from "@pages/PersonalDataPage/PersonalDataPage"
import { ServerErrorPage } from "./pages/ServerErrorPage/ServerErrorPage"
import { Layout } from "@components/Layout/Layout"

import { LoadConstantsIfNotExist } from "@store/ConstantsSlice/loadConstantsIfNotExist"
import { selectLanguage } from "@store/LanguageSlice/selectors"
import { selectConstantsState } from "./store/ConstantsSlice/selectors"

const Application = () => {
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	const state = useSelector(selectConstantsState)
	useEffect(() => dispatch(LoadConstantsIfNotExist), [curLan])

	return (
		<>
			{state.status == "failed" && <ServerErrorPage />}
			{state.status !== "failed" && (
				<Layout>
					<Routes>
						<Route index element={<MainPage />} />
						<Route path="/OurCases" element={<ProjectsPage />} />
						<Route path="/CommentsPage" element={<CommentsPage />} />
						<Route path="/personalData" element={<PersonalDataPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Layout>
			)}
		</>
	)
}

export default Application
