import { Statuses } from "@utils/Statuses";


export const selectFeedback = (state) => state.Feedback;
export const selectIsFeedBackLoading = (state) => selectFeedback(state).status === Statuses.inProgress;
export const selectIsFeedBackSuccess = (state) => selectFeedback(state).status === Statuses.success;
export const selectIsFeedBackFailed = (state) => selectFeedback(state).status === Statuses.failed;
