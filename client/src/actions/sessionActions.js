import * as types from '../constants/ActionTypes';
// import axios from 'axios';

export function fetchingSession() {
	return { type: types.FETCHING_SESSION }; // Send 'Loading'
}

export function receiveSession(data) {
	return { type: types.RECEIVE_SESSION, session: data }; // Send info
}

export function fetchSession() {
	return (dispatch) => {
		dispatch(fetchingSession()); // 'Loading...'
		// API Call
		setTimeout(() => {
			dispatch(receiveSession({ id: '123', level: 0 })); // Got em
		}, 800);
	};
}

export function updateLevelNum(level) {
	return (dispatch) => {
		// API Call
		setTimeout(() => {
			dispatch(receiveSession({ id: '123', level })); // Got em
		}, 1000);
	};
}
