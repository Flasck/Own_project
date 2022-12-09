import React from 'react'
import { HeroBlock } from '../../components/HeroBlock/HeroBlock'
import { MapBlock } from '../../components/MapBlock/MapBlock'
import { OurTeam } from '../../components/OurTeam/OurTeam'
import styles from './MainPage.module.css'

export const MainPage = () =>
    <>
        <HeroBlock />
        <OurTeam />
        <MapBlock />
    </>
