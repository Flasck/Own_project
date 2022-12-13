export const selectMap = (state) => state.Map
export const selectCurrentActiveMark = (state) => selectMap(state).currentActiveMark
export const selectAllPlaces = (state) => selectMap(state).allPlaces
export const selectStatusMap = (state) => selectMap(state).status
