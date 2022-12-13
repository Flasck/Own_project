import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	value: localStorage.getItem("currentLang") || "ru",
}

export const LanguageSlice = createSlice({
	name: "LanguageSlice",
	initialState: initialState,
	reducers: {
		changeLang: (state, action) => {
			state.value = action.payload;
			localStorage.setItem("currentLang", action.payload);
		},
	},
})
