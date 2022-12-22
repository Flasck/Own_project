import { CommentsSlice } from "./index"
import { selectCommentsIsLoaded } from "./selectors"

export const LoadCommentsIfNotExist = (dispatch, getState) =>
{
	const state = getState();
	if (selectCommentsIsLoaded(state)) return;

	dispatch(CommentsSlice.actions.startLoadingGetComments());

	// eslint-disable-next-line no-undef
	fetch(`${SERVERURL}/comments`)
		.then(v => v.json())
		.then(data => dispatch(CommentsSlice.actions.successLoadingGetComments(data)))
		.catch(() => dispatch(CommentsSlice.actions.failLoadingGetComments()))
}
