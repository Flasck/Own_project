import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { FeedbackSlice } from "./FeedbackSlice"
import { ConstantsSlice } from "./ConstantsSlice"
import { LanguageSlice } from "./LanguageSlice"

export const store = configureStore({
	reducer: combineReducers({
		Feedback: FeedbackSlice.reducer,
		Constants: ConstantsSlice.reducer,
		Language: LanguageSlice.reducer,
	}),
});
