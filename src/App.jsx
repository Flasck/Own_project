import "./App.module.css"
import "./fonts.module.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { MainPage } from "@pages/MainPage/MainPage"
import { ProjectsPage } from "@pages/ProjectsPage/ProjectsPage"
import { CommentsPage } from "@pages/CommentsPage/CommentsPage"
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage"
import { PersonalDataPage } from "@pages/PersonalDataPage/PersonalDataPage"
import { Layout } from "@components/Layout/Layout"

import { LoadConstantsIfNotExist } from "@store/ConstantsSlice/loadConstantsIfNotExist"
import { selectLanguage } from "@store/LanguageSlice/selectors"


const Application = () =>
{
	const dispatch = useDispatch()
	const curLan = useSelector(selectLanguage)
	useEffect(() => dispatch(LoadConstantsIfNotExist), [curLan])

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<MainPage />} />
					<Route path="/OurCases" element={<ProjectsPage />} />
					<Route path="/CommentsPage" element={<CommentsPage />} />
					<Route path="/personalData" element={<PersonalDataPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default Application
