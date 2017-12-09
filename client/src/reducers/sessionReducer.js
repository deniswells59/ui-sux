import { RECEIVE_SESSION, FETCHING_SESSION  } from '../constants/ActionTypes';

export default function session(state = { loading: true }, action) { // Init with loading
  switch (action.type) {
    case FETCHING_SESSION:
      return {
        loading: true, // 'Loading'
      };
    case RECEIVE_SESSION:
      return {
        loading: false,
        data: action.session // Got em
      };
    default:
      return state;
  }
}
