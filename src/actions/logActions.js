import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

// one way to handle getting logs, the next options below is better

// export const getLogs = () => {
// 	return async (dispatch) => {
// 		setLoading();

// 		const res = await fetch('/logs');
// 		const data = await res.json();

// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data,
// 		});
// 	};
// };

// get logs from the server
export const getLogs = () => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data,
		});
	}
};

// this will set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
