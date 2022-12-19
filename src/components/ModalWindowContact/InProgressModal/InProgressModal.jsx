import React from "react";
import styles from "@components/ModalWindowContact/ModalWindowContact.module.css";
import {Spinner} from "@components/Spinner/Spinner";
export const InProgressModal = ({setView}) => {
    return (
        <div
            className={styles.modal}
            onClick={() => setView(e => !e)}
        >
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <Spinner />
            </div>
        </div>
    )
}