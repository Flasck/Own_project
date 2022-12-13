import { selectLanguage } from "../LanguageSlice/selectors"

export const selectPeopleState = (state) => state.People
export const selectPeopleStatus = (state) => selectPeopleState(state).status
export const selectPeople = (state) => selectPeopleState(state).text[selectLanguage(state)]
export const selectPeopleIsLoaded = (state) => selectPeopleState(state).text[selectLanguage(state)] !== null
