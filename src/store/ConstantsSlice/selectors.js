import { selectLanguage } from "../LanguageSlice/selectors"

export const selectConstantsState = (state) => state.Constants;
export const selectConstantsStatus = (state) => selectConstantsState(state).status;
export const selectConstants = (state) => selectConstantsState(state).text[selectLanguage(state)];
export const selectConstantsIsLoaded = (state) => selectConstantsState(state).text[selectLanguage(state)] !== null;
