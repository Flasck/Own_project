import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "@utils/Statuses"


const initialState = {
	comments: null,
	statusGetComments: Statuses.idle,
	statusSendComment: Statuses.idle,
}

export const CommentsSlice = createSlice({
	name: "Comments",
	initialState,
	reducers: {
		changeWidgetView: (state, action) =>
		{
			state.statusSendComment = action.payload
		},
		startLoadingGetComments: state =>
		{
			state.statusGetComments = Statuses.inProgress
		},
		successLoadingGetComments: (state, action) =>
		{
			state.statusGetComments = Statuses.success
			state.comments = action.payload
		},
		failLoadingGetComments: state =>
		{
			state.statusGetComments = Statuses.failed
		},
		startLoadingSendComment: state =>
		{
			state.statusSendComment = Statuses.inProgress
		},
		successLoadingSendComment: (state, action) =>
		{
			state.statusSendComment = Statuses.success
			state.comments = [...state.comments, action.payload]
		},
		failLoadingSendComment: state =>
		{
			state.statusSendComment = Statuses.failed
		},
	},
})
