export const selectCommentsState = (state) => state.Comments;
export const selectCommentsStatus = (state) => selectCommentsState(state).status;
export const selectComments = (state) => selectCommentsState(state).comments;
export const selectCommentsIsLoaded = (state) => selectCommentsState(state).comments !== null;
