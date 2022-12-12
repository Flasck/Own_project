import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "../../utils/Statuses"

const initialState = {
	currentLang: localStorage.getItem("currentLang") || "ru",
	status: Statuses.idle,
}

export const CurrentLanguageSlice = createSlice({
	name: "currentLanguageSlice",
	initialState: initialState,
	reducers: {
		changeLang: (state, action) => {
			state.currentLang = action.payload
			localStorage.setItem("currentLang", action.payload)
		},
	},
})
