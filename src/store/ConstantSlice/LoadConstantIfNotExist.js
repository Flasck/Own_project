import { ConstantSlice } from "./index"

export const LoadConstantIfNotExist = () => (dispatch, getState) => {
	const lang = getState().CurrentLang.currentLang
	const curText = getState().Constant.text[lang]
	if (!curText) {
		console.log(1)
		dispatch(ConstantSlice.actions.startLoading())
		fetch(`http://localhost:3001/text?lang=${lang}`)
			.then((d) => d.json())
			.then((data) => dispatch(ConstantSlice.actions.successLoading({ data, lang })))
			.catch(() => dispatch(ConstantSlice.actions.failLoading()))
	}
}
