import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { FeedbackSlice } from "./Feedback";

export const store = configureStore({
  reducer: combineReducers({
    Feedback: FeedbackSlice.reducer,
  }),
});
