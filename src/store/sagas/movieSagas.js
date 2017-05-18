import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import { GET_MOVIES } from '../actionTypes';
import { getMoviesSuccess, getMoviesFailure } from '../actions/movieActions';

const fetchMovies = () => {
  return axios({
    method: 'get',
    url: 'https://hoopla-ws-dev.hoopladigital.com/kinds/7/titles/featured?offset=0&limit=51&kindId=7',
    headers: {
      'ws-api': '2.1'
    }
  })
  .then(response => {
    return response.data;
  })
}

// A generator function to get movies;
// note we catch the fetchMovies promise failure
// in order to trigger getMoviesFailure.
function* getMovies () {
  try {
    const movies = yield call(fetchMovies);
    yield put(getMoviesSuccess(movies));
  } catch (err) {
    yield put(getMoviesFailure());
  }
}

// Simple generator function to return
// the current movie list if someone GET_MOVIES
function* watchGetMovies () {  
  yield takeLatest(GET_MOVIES, getMovies);
}

export {
    watchGetMovies
};
