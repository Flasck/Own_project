import { FeedbackSlice } from "./index"


export const SendFeedBack = data => dispatch =>
{
	dispatch(FeedbackSlice.actions.startLoading());
	fetch(`${SERVERURL}/feedback`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((req) =>
		{
			if (req.status !== 200)
				return dispatch(FeedbackSlice.actions.failLoading());
			return dispatch(FeedbackSlice.actions.successLoading());
		})
		.catch(() => dispatch(FeedbackSlice.actions.failLoading()));
}
