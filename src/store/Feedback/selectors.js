export const selectStatusModalViewState = (state) => state.Feedback
export const selectStatusModalView = (state) => selectStatusModalViewState(state).modalView
export const selectStatusModalViewRequest = (state) => selectStatusModalViewState(state).status
