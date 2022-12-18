import React from "react";
import styles from "./WidgetComment.module.css";
import {selectCommentsStatusSend} from "@store/CommentsSlice/selectors";
import {useDispatch, useSelector} from "react-redux";
import {Statuses} from "@utils/Statuses";
import {CommentsSlice} from "@store/CommentsSlice";
import {Spinner} from "../Spinner/Spinner";
import SuccessIcon from "./success.svg";
import ErrorIcon from "./error.svg";
import {classnames} from "../../utils/classnames";

export const WidgetComment = () => {
    const dispatch = useDispatch()
    const selectStatus = useSelector(selectCommentsStatusSend)

    if(selectStatus === Statuses.success) {
        setTimeout(()=>dispatch(CommentsSlice.actions.changeWidgetView(Statuses.idle)), 3000)

        return <div className={classnames(styles.widget, styles.success)}>
            <img style={{marginRight: "10px"}} src={SuccessIcon} alt="success"/> Успешно отправлен запрос
        </div>
    }

    if(selectStatus === Statuses.failed) {
        setTimeout(()=>dispatch(CommentsSlice.actions.changeWidgetView(Statuses.idle)), 3000)

        return <div className={classnames(styles.widget, styles.error)}>
            <img style={{marginRight: "10px"}} src={ErrorIcon} alt="error"/> Произошла ошибка
        </div>
    }

    return <div className={styles.widget}>
        <Spinner/>
    </div>
}