import React, {useEffect} from "react"
import styles from "./MapBlock.module.css"
import {useDispatch, useSelector} from "react-redux";
import {Statuses} from "@utils/Statuses";

import {YMaps} from "@pbe/react-yandex-maps";
import {ContactButton} from "./ContactButton/ContactButton"
import {OurMap} from "./OurMap/OurMap"
import {PlacesList} from "./PlacesList/PlacesList"
import {Placeholder} from "@components/Placeholder/Placeholder";

import {LoadMapIfNotExist} from "@store/MapSlice/LoadMapIfNotExist";
import {selectAllPlaces, selectStatusMap} from "@store/MapSlice/selectors"
import {selectConstants} from "@store/ConstantsSlice/selectors"
import {selectLanguage} from "@store/LanguageSlice/selectors";

export const MapBlock = ({setViewModal}) => {
    const dispatch = useDispatch();
    const allPlaces = useSelector(selectAllPlaces);
    const statusLoadMap = useSelector(selectStatusMap);
    const curLang = useSelector(selectLanguage)
    const texts = useSelector(selectConstants);

    useEffect(() => dispatch(LoadMapIfNotExist()), [curLang]);

    return <section>
        <div className={styles.title}>
            <h2 className={styles.title__text}>{texts ? texts.mainPage.mapBlock.title : <Placeholder width={20}/>}</h2>
            <ContactButton onClick={() => setViewModal(e => !e)}>
                {texts ? texts.mainPage.mapBlock.contactButton : <Placeholder width={12}/>}
            </ContactButton>
        </div>
            {statusLoadMap === Statuses.inProgress || allPlaces === null ? (
                <div className={styles.wrapper}>
                    <Placeholder height={300} unitH={'px'}  disableText={true}/>
                </div>
            ) : (
                <div className={styles.container}>
                    <PlacesList/>
                    <YMaps>
                        <OurMap/>
                    </YMaps>
                </div>
            )
            }
    </section>
}
