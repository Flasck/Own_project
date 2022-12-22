import { CommentsSlice } from "./index"
import { selectCommentsIsLoaded } from "./selectors"


export const LoadCommentsIfNotExist = (dispatch, getState) =>
{
	const state = getState();
	if (selectCommentsIsLoaded(state)) return;

	dispatch(CommentsSlice.actions.startLoadingGetComments());

	fetch(`${SERVERURL}/comments`)
		.then(v => v.json())
		.then(data => dispatch(CommentsSlice.actions.successLoadingGetComments(data)))
		.catch(() => dispatch(CommentsSlice.actions.failLoadingGetComments()))
}
