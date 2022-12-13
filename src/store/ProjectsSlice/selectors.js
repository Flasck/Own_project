import { selectLanguage } from "../LanguageSlice/selectors"

export const selectProjectsState = (state) => state.Projects;
export const selectProjectsStatus = (state) => selectProjectsState(state).status;
export const selectProjects = (state) => selectProjectsState(state).text[selectLanguage(state)];
export const selectProjectsIsLoaded = (state) => selectProjectsState(state).text[selectLanguage(state)] !== null;
