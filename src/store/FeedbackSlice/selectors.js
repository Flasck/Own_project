export const selectFeedback = (state) => state.Feedback;
export const selectModalView = (state) => selectFeedback(state).modalView;
export const selectFeedbackStatus = (state) => selectFeedback(state).status;
