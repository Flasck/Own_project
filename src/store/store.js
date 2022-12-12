import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { FeedbackSlice } from "./Feedback"
import { ConstantSlice } from "./ConstantSlice"
import { CurrentLanguageSlice } from "./CurrentLanguage"

export const store = configureStore({
	reducer: combineReducers({
		Feedback: FeedbackSlice.reducer,
		Constant: ConstantSlice.reducer,
		CurrentLang: CurrentLanguageSlice.reducer,
	}),
})
