import { selectLanguage } from "../LanguageSlice/selectors"
import { ConstantsSlice } from "./index"
import { selectConstantsIsLoaded } from "./selectors"

export const LoadConstantsIfNotExist = (dispatch, getState) => {
	const state = getState()
	if (selectConstantsIsLoaded(state)) return

	dispatch(ConstantsSlice.actions.startLoading())
	const lang = selectLanguage(state)

	fetch(`http://localhost:3001/texts?lang=${lang}`)
		.then((v) => v.json())
		.then((data) => {
			dispatch(ConstantsSlice.actions.successLoading({ data, lang }))
		})
		.catch((e) => {
			dispatch(ConstantsSlice.actions.failLoading())
		})
}
