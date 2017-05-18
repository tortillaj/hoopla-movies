import Immutable from 'immutable';
import { GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from '../actionTypes';

const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: {
      // merge the successfully fetched movies into the state
      return state.merge({ list: action.movies });
    }
    case GET_MOVIES_FAILURE: {
      // empty out the movies from the state
      return state = state.clear();
    }
    default:
      // return the current state
      return state;
  }
}
