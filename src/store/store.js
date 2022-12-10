import languageReducer from "./LanguageSlice/LanguageSlice"
const { configureStore } = require("@reduxjs/toolkit")

export const store = configureStore({
	reducer: {
		lan: languageReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})
