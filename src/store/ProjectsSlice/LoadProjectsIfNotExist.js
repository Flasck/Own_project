import { selectLanguage } from "../LanguageSlice/selectors"
import { ProjectsSlice } from "./index"
import { selectProjectsIsLoaded } from "./selectors"


export const LoadProjectsIfNotExist = (dispatch, getState) =>
{
	const state = getState();
	if (selectProjectsIsLoaded(state)) return;

	dispatch(ProjectsSlice.actions.startLoading());
	const lang = selectLanguage(state);

	fetch(`${SERVERURL}/projects?lang=${lang}`)
		.then(v => v.json())
		.then(data => dispatch(ProjectsSlice.actions.successLoading({ data, lang })))
		.catch(() => dispatch(ProjectsSlice.actions.failLoading()))
}
