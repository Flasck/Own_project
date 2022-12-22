import { CommentsSlice } from "./index"

export const SendComment = data => dispatch =>
{
	dispatch(CommentsSlice.actions.startLoadingSendComment());
	// eslint-disable-next-line no-undef
	fetch(`${SERVERURL}/comment`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then(req =>
		{
			if (req.status !== 200)
				return dispatch(CommentsSlice.actions.failLoadingSendComment());
			return dispatch(CommentsSlice.actions.successLoadingSendComment(data));
		})
		.catch(() => dispatch(CommentsSlice.actions.failLoadingSendComment()));
}
