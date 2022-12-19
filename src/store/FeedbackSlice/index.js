import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "@utils/Statuses"


const initialState = { status: Statuses.idle }

export const FeedbackSlice = createSlice({
	name: "FeedbackSlice",
	initialState,
	reducers: {
		startLoading: (state, action) =>
		{
			state.status = Statuses.inProgress;
		},
		successLoading: (state, action) =>
		{
			state.status = Statuses.success;
		},
		failLoading: (state, action) =>
		{
			state.status = Statuses.failed;
		},
		changeStatus: (state, action) =>
		{
			state.status = action.payload;
		},
	},
})
