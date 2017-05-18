import { watchGetMovies } from './movieSagas';

export default function* rootSaga () {
  yield [
    watchGetMovies()
  ];
}
