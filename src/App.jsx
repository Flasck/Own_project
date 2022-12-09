import React from 'react'
import styles from './App.module.css'
import ReactIcon from '@images/React-icon.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {MainPage} from '@pages/MainPage/MainPage.jsx'
import {ProjectsPage} from '@pages/ProjectsPage/ProjectsPage.jsx'
import {SearchPage} from '@pages/SearchPage/SearchPage.jsx'
import {NotFoundPage} from '@pages/NotFoundPage/NotFoundPage.jsx'
import {Layout} from '@components/Layout/Layout.jsx'

export const Application = () => {
    return (
        <>  
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<MainPage />}/>
                        <Route path="/OurCases" element={<ProjectsPage />} />
                        <Route path="/SearchPage" element={<SearchPage />} />
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </Layout>
            </BrowserRouter>
            <h1 className={styles.block}>Hello wordl!</h1>
            <img src={ReactIcon} alt="icon" />
        </>
    )
}