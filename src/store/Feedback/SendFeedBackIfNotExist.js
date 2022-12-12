import { FeedbackSlice } from "./index"

export const SendFeedBackIfNotExist = (data) => (dispatch, getState) => {
	dispatch(FeedbackSlice.actions.startLoading())
	fetch(`http://localhost:7777/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(data),
	})
		.then(() => dispatch(FeedbackSlice.actions.successLoading()))
		.catch(() => {
			dispatch(FeedbackSlice.actions.failLoading())
		})
}
