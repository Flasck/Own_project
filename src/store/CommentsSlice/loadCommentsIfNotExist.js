import { CommentsSlice } from "./index"
import { selectCommentsIsLoaded } from "./selectors"

export const LoadProjectsIfNotExist = (dispatch, getState) =>
{
    const state = getState();
    if (selectCommentsIsLoaded(state)) return;

    dispatch(CommentsSlice.actions.startLoading());

    fetch(`http://localhost:3001/comments`)
        .then((v) => v.json())
        .then((data) => dispatch(CommentsSlice.actions.successLoading(data)))
        .catch(() => dispatch(CommentsSlice.actions.failLoading()))
}
