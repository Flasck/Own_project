export const selectCommentsState = (state) => state.Comments;
export const selectCommentsStatusGet = (state) => selectCommentsState(state).statusGetComments;
export const selectCommentsStatusSend = (state) => selectCommentsState(state).statusSendComment;
export const selectComments = (state) => selectCommentsState(state).comments;
export const selectCommentsIsLoaded = (state) => selectCommentsState(state).comments !== null;
