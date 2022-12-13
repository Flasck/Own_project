import React from "react"
import { ContactButton } from "./ContactButton/ContactButton"
import { Map } from "./Map/Map"
import { PlacesList } from "./PlacesList/PlacesList"
import styles from "./MapBlock.module.css"
import { useDispatch } from "react-redux";
import { FeedbackSlice } from "@store/FeedbackSlice";

export const MapBlock = () =>
{
    const dispatch = useDispatch();

    return <section className={styles.root}>
        <div className={styles.title}>
            <h2 className={styles.title__text}>Контактная информация</h2>
            <ContactButton onClick={() => { dispatch(FeedbackSlice.actions.changeView()) }} />
        </div>
        <div className={styles.container}>
            <PlacesList />
            <Map />
        </div>
    </section>
}
