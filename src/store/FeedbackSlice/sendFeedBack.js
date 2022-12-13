import { FeedbackSlice } from "./index"

export const SendFeedBack = (data) => (dispatch, getState) =>
{
	dispatch(FeedbackSlice.actions.startLoading());
	fetch(`http://localhost:3001/comment`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify(data),
	})
		.then(() => dispatch(FeedbackSlice.actions.successLoading()))
		.catch(() => dispatch(FeedbackSlice.actions.failLoading()))
}
