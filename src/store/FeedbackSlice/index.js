import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "@utils/Statuses"


const initialState = { status: Statuses.idle }

export const FeedbackSlice = createSlice({
	name: "FeedbackSlice",
	initialState,
	reducers: {
		startLoading: state =>
		{
			state.status = Statuses.inProgress;
		},
		successLoading: state =>
		{
			state.status = Statuses.success;
		},
		failLoading: state =>
		{
			state.status = Statuses.failed;
		},
		changeStatus: (state, action) =>
		{
			state.status = action.payload;
		},
	},
})
