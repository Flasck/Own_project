export const selectConstantState = (state) => state.Constant
export const selectConstantStatus = (state) => state.Constant.status
export const selectConstantText = (state) => state.Constant.text[state.CurrentLang.currentLang]
