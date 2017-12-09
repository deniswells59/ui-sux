import * as types from '../constants/ActionTypes';
import axios from 'axios';

export function fetchingSession(data) {
  return { type: types.FETCHING_SESSION }; // Send 'Loading'
}

export function receiveSession(data) {
  return { type: types.RECEIVE_SESSION, session: data }; // Send info
}

export function fetchSession(data) {
  return dispatch => {
    dispatch(fetchingSession()); // 'Loading...'

    // API Call
    setTimeout(() => {
      dispatch(receiveSession({ id: '123', level: '0' })); // Got em
    }, 2000);
  };
}
