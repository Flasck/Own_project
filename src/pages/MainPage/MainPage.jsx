import React from 'react'
import { HeroBlock } from '@components/HeroBlock/HeroBlock'
import styles from './MainPage.module.css'
import {OurTeam} from "@components/OurTeam/OurTeam";
import {MapBlock} from "@components/MapBlock/MapBlock";

export const MainPage = () => {
        return <>
                <HeroBlock />
                <OurTeam />
                <MapBlock />
        </>
}