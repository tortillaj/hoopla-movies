import React, { Component } from 'react';
import MovieListView from './movieListView.js';
import { Header } from '../components';

const movies = [];

class AppContainer extends Component {
  render() {
    return (
      <article className="app">
        <Header />
        <MovieListView movies={movies} />
      </article>
    );
  }
}

export default AppContainer;
