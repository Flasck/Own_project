import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { FeedbackSlice } from "./FeedbackSlice"
import { ConstantsSlice } from "./ConstantsSlice"
import { LanguageSlice } from "./LanguageSlice"
import { PeopleSlice } from "./PeopleSlice"
import { MapSlice } from "./MapSlice"
import { ProjectsSlice } from "./ProjectsSlice"
import {CommentsSlice} from "./CommentsSlice";

export const store = configureStore({
	reducer: combineReducers({
		Feedback: FeedbackSlice.reducer,
		Constants: ConstantsSlice.reducer,
		Language: LanguageSlice.reducer,
		People: PeopleSlice.reducer,
		Map: MapSlice.reducer,
		Projects: ProjectsSlice.reducer,
		Comments: CommentsSlice.reducer
	}),
});
