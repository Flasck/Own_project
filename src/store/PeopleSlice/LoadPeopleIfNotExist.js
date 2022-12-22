import { selectLanguage } from "../LanguageSlice/selectors"
import { PeopleSlice } from "./index"
import { selectPeopleIsLoaded } from "./selectors"


export const LoadPeopleIfNotExist = (dispatch, getState) =>
{
	const state = getState();
	if (selectPeopleIsLoaded(state)) return;

	dispatch(PeopleSlice.actions.startLoading());
	const lang = selectLanguage(state);

	fetch(`${SERVERURL}/persons?lang=${lang}`)
		.then(v => v.json())
		.then(data => dispatch(PeopleSlice.actions.successLoading({ data, lang })))
		.catch(() => dispatch(PeopleSlice.actions.failLoading()))
}
