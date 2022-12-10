import { startLoading, successLoading, failLoading } from "./BooksSlice"

export const loadBooks = (dispatch, getState) => {
	dispatch(startLoading())
	fetch("https://jsonplaceholder.typicode.com/todos/")
		.then((response) => response.json())
		.then((pack) => {
			dispatch(successLoading(pack))
		})
		.catch(() => {
			dispatch(failLoading())
		})
}
