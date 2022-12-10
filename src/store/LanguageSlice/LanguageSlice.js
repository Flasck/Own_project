import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "../statuses"

const initialState = {
	entities: [],
	status: Statuses.idle,
}

export const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		startLoading: (state) => {
			state.status = Statuses.inProgress
			state.entities = []
		},
		successLoading: (state, action) => {
			state.status = Statuses.success
			state.entities = action.payload
		},
		failLoading: (state) => {
			state.status = Statuses.failed
			state.entities = []
		},
	},
})

export const { startLoading, successLoading, failLoading } = languageSlice.actions
export default languageSlice.reducer
