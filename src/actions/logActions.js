import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG } from './types';

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

// add new log

// Add new log
export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// this will set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};

// export const addLog = (log) => async (dispatch) => {
// 	try {
// 		setLoading();
// 		const res = await fetch('/logs', {
// 			method: 'POST',
// 			body: JSON.stringify(log),
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 		});

// 		const data = await res.json();

// 		dispatch({
// 			type: ADD_LOG,
// 			payload: data,
// 		});
// 	} catch (err) {
// 		dispatch({
// 			type: LOGS_ERROR,
// 			payload: err.response.data,
// 		});
// 	}
// };
