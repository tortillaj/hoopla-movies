import { combineReducers } from 'redux-immutable';
import movieReducers from './movieReducers';

export default combineReducers({
  movies: movieReducers
});
