import {CommentsSlice} from "./index"

export const SendComment = (data) => (dispatch, getState) => {
    dispatch(CommentsSlice.actions.startLoadingSendComment());
    fetch(`http://localhost:3001/comment`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((req) => {
            if (req.status !== 200) {
                return dispatch(CommentsSlice.actions.failLoadingSendComment())
            }
            return dispatch(CommentsSlice.actions.successLoadingSendComment(data))
        })
        .catch(() => dispatch(CommentsSlice.actions.failLoadingSendComment()))
}