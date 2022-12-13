import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./App.module.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "@pages/MainPage/MainPage.jsx"
import { ProjectsPage } from "@pages/ProjectsPage/ProjectsPage.jsx"
import { SearchPage } from "@pages/SearchPage/SearchPage.jsx"
import { NotFoundPage } from "@pages/NotFoundPage/NotFoundPage.jsx"
import { Layout } from "@components/Layout/Layout.jsx"
import { LoadConstantsIfNotExist } from "@store/ConstantsSlice/loadConstantsIfNotExist"
import { selectLanguage } from "@store/LanguageSlice/selectors"

export const Application = () => {
	const dispatch = useDispatch();
	const curLan = useSelector((state) => selectLanguage(state));
	useEffect(() => dispatch(LoadConstantsIfNotExist()), [curLan]);

	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route index element={<MainPage />} />
						<Route path="/OurCases" element={<ProjectsPage />} />
						<Route path="/SearchPage" element={<SearchPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	)
}
