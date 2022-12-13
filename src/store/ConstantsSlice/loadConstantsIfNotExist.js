import { selectLanguage } from "../LanguageSlice/selectors"
import { ConstantsSlice } from "./index"
import { selectConstantsIsLoaded } from "./selectors"


export const LoadConstantsIfNotExist = (dispatch, getState) =>
{
	const state = getState();
	if (selectConstantsIsLoaded(state)) return;

	dispatch(ConstantsSlice.actions.startLoading());
	const lang = selectLanguage(state);

	fetch(`http://localhost:3001/text?lang=${lang}`)
		.then(v => v.json())
		.then(data => dispatch(ConstantsSlice.actions.successLoading({ data, lang })))
		.catch(() => dispatch(ConstantsSlice.actions.failLoading()))
}
