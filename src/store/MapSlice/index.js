import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "@utils/Statuses"

const initialState = {
    allPlaces: null,
    currentActiveMark: {
        address: null,
        coords: null
    },
    status: Statuses.idle,
}
export const MapSlice = createSlice({
    name: "Map",
    initialState: initialState,
    reducers: {
        changeCurrentActive: (state, action) => {
            state.currentActiveMark = action.payload
        },
        startLoading: (state, action) => {
            state.status = Statuses.inProgress
        },
        successLoading: (state, action) => {
            state.status = Statuses.success
            state.allPlaces = action.payload
        },
        failLoading: (state, action) => {
            state.status = Statuses.failed
        },
    },
})