import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "@utils/Statuses"

const initialState = {
    comments: null,
    status: Statuses.idle,
}
export const CommentsSlice = createSlice({
    name: "Comments",
    initialState: initialState,
    reducers: {
        startLoading: (state, action) => {
            state.status = Statuses.inProgress
        },
        successLoading: (state, action) => {
            state.status = Statuses.success
            state.comments = action.payload
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed
        },
    },
})
