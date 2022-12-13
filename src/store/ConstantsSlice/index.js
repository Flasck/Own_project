import { createSlice } from "@reduxjs/toolkit"
import { Statuses } from "../../utils/Statuses"

const initialState = {
	text: { ru: null, en: null },
	status: Statuses.idle,
}

export const ConstantsSlice = createSlice({
	name: "ConstantsSlice",
	initialState: initialState,
	reducers: {
		startLoading: (state) => {
			state.status = Statuses.inProgress;
		},
		successLoading: (state, action) => {
			if (action.payload.lang === "ru")
				state.text.ru = action.payload.data;
			else if (action.payload.lang === "en")
				state.text.en = action.payload.data;
			state.status = Statuses.success;
		},
		failLoading: (state) => {
			state.status = Statuses.failed;
		},
	},
})
