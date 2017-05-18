import { GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE } from '../actionTypes';

function getMovies () {
  return {
    type: GET_MOVIES
  };
}

function getMoviesSuccess (movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies
  };
}

function getMoviesFailure () {
  return {
    type: GET_MOVIES_FAILURE
  };
}

export {
  getMovies,
  getMoviesSuccess,
  getMoviesFailure
};
