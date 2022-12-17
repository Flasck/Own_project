import React from "react";
import styles from "./Preloader.module.css";
import {Spinner} from "@components/Spinner/Spinner";

export const Preloader = () =>
    <div className={styles.root}>
        <Spinner/>
    </div>