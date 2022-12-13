import { MapSlice } from "./index"

export const LoadMapIfNotExist = () => (dispatch, getState) => {
    const allPlaces = getState().Map.allPlaces
    if(!allPlaces) {
        dispatch(MapSlice.actions.startLoading())
            fetch(`http://localhost:3001/places`)
                .then((d) => d.json())
                .then(data => dispatch(MapSlice.actions.successLoading(data)))
                .catch(() => {
                    dispatch(MapSlice.actions.failLoading())
                })
    }
}
