import { selectLanguage } from "@store/LanguageSlice/selectors";
import { MapSlice } from "./index"


export const LoadMapIfNotExist = () => (dispatch, getState) =>
{
	const state = getState();
	const { allPlaces } = state.Map
	const lang = selectLanguage(state)

	if (!allPlaces[lang])
	{
		dispatch(MapSlice.actions.startLoading())
		fetch(`http://localhost:3001/places?lang=${lang}`)
			.then(d => d.json())
			.then(data => dispatch(MapSlice.actions.successLoading({ data, lang })))
			.catch(() =>
			{
				dispatch(MapSlice.actions.failLoading())
			})
	}
}
